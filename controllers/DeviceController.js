import DeviceDetector from "device-detector-js";

const index = (req, res) => {

    console.log(req.headers['user-agent'])
    // res.locals.ua = req.get('User-Agent');

    const deviceDetector = new DeviceDetector()
    const userAgent = req.headers['user-agent']
    const device    = deviceDetector.parse(userAgent)

    let message = `Kamu menggunakan ${device.device.type}`
        message += ` dengan os ${device.os.name}`
        message += ` dan aplikasi ${device.client.type}` 

    return res.status(200).json({
        success : true,
        message : message
    })
}

export default { index }