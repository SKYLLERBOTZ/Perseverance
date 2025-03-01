let axios = require('axios')
let BodyForm = require('form-data')
let fs = require('fs')
let cheerio = require('cheerio')

  async function CatBox(filePath) {
    try {
      const fileStream = fs.createReadStream(filePath);
      const formData = new BodyForm();
      formData.append('fileToUpload', fileStream);
      formData.append('reqtype', 'fileupload');
      formData.append('userhash', ''); // Anda dapat memberikan userhash jika diperlukan

      const response = await axios.post('https://catbox.moe/user/api.php', formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      // Dengan asumsi API mengembalikan URL file sebagai respons
      return response.data;
    } catch (error) {
      console.error("Error at Catbox uploader:", error);
      return "Terjadi kesalahan saat upload ke Catbox.";
    }
  }

  async function pomfCDN(path) {
    try {
      const fileStream = fs.createReadStream(path);
      const formData = new BodyForm();
      formData.append('files[]', fileStream);

      const response = await axios.post('https://pomf.lain.la/upload.php', formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      return response.data.files[0].url
    } catch (error) {
      console.log("Error at pomf uploader in lib/uploader.js:", error)
      return "Terjadi Kesalahan"
    }
  }

  function CDNmeitang(Path) {
    return new Promise (async (resolve, reject) => {
      if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
      try {
        const form = new BodyForm();
        form.append("file", fs.createReadStream(Path))
        const data = await axios({
          url: "https://cdn.meitang.xyz/upload",
          method: "POST",
          headers: {
            ...form.getHeaders()
          },
          data: form
        })
        return resolve(data.data)
      } catch (err) {
        return reject(new Error(String(err)))
      }
    })
  }

  function TelegraPh(Path) {
    return new Promise (async (resolve, reject) => {
      if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
      try {
        const form = new BodyForm();
        form.append("file", fs.createReadStream(Path))
        const data = await axios({
          url: "https://telegra.ph/upload",
          method: "POST",
          headers: {
            ...form.getHeaders()
          },
          data: form
        })
        return resolve("https://telegra.ph" + data.data[0].src)
      } catch (err) {
        return reject(new Error(String(err)))
      }
    })
  }

  async function UploadFileUgu(input) {
    return new Promise (async (resolve, reject) => {
      const form = new BodyForm();
      form.append("files[]", fs.createReadStream(input))
      await axios({
        url: "https://uguu.se/upload.php",
        method: "POST",
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
          ...form.getHeaders()
        },
        data: form
      }).then((data) => {
        resolve(data.data.files[0])
      }).catch((err) => reject(err))
    })
  }

  function webp2mp4File(path) {
    return new Promise((resolve, reject) => {
      const form = new BodyForm()
      form.append('new-image-url', '')
      form.append('new-image', fs.createReadStream(path))
      axios({
        method: 'post',
        url: 'https://s6.ezgif.com/webp-to-mp4',
        data: form,
        headers: {
          'Content-Type': `multipart/form-data; boundary=${form._boundary}`
        }
      }).then(({ data }) => {
        const bodyFormThen = new BodyForm()
        const $ = cheerio.load(data)
        const file = $('input[name="file"]').attr('value')
        bodyFormThen.append('file', file)
        bodyFormThen.append('convert', "Convert WebP to MP4!")
        axios({
          method: 'post',
          url: 'https://ezgif.com/webp-to-mp4/' + file,
          data: bodyFormThen,
          headers: {
            'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
          }
          }).then(({ data }) => {
          const $ = cheerio.load(data)
          const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
          resolve({
            status: true,
            message: "Successful",
            result: result
          })
        }).catch(reject)
      }).catch(reject)
    })
  }

module.exports = { CatBox, pomfCDN, CDNmeitang, TelegraPh, UploadFileUgu, webp2mp4File }
