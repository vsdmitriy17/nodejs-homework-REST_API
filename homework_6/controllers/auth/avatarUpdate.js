const fs = require('fs').promises;
const path = require("path");
const { User } = require("../../models/user");

const avatarsPath = path.join(__dirname, "../../", "public/avatars"); // шлях до папки в котрій зберігаємо аватарки
const Jimp = require("jimp");

const avatarUpdate = async (req, res) => {
    try {
        const { _id } = req.user;
        const { path: tmpPath, originalname } = req.file; // шлях до папки в кот. тимчасово знаходиться ф-л і оригінальне ім'я ф-лу
        const [extention] = originalname.split(".").reverse(); // розширення ф-лу
        const newFileName = `${_id}.${extention}`; //нове ім'я ф-лу
        const uploadPath = path.join(avatarsPath, newFileName); // шлях до папки в котру перекидаємо ф-л
        Jimp.read(tmpPath, (err, img) => {
            if (err) throw err;
            img.resize(250, 250).write(uploadPath);
        });

        await fs.rename(tmpPath, uploadPath); // переносимо ф-л з tmpPath до uploadPath
        const avatarURL = "//avatars/" + `${newFileName}`; // новий шлях до ф-лу (аватрки)

        await User.findByIdAndUpdate(_id, { avatarURL }); //обновлюємо базу
        res.json({ avatarURL });
    } catch (error) {
        await fs.unlink(req.file.path); // удаляє шлях до ф-ла із запиту
        throw error;
    }
}

module.exports = avatarUpdate;