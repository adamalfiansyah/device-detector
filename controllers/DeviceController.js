import DeviceDetector from "device-detector-js";

const index = (req, res) => {

    console.log(req.headers['user-agent'])
    // res.locals.ua = req.get('User-Agent');

    const deviceDetector = new DeviceDetector()
    // const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36";
    const userAgent = req.headers['user-agent']
    const device = deviceDetector.parse(userAgent)

    return res.status(200).json({
        success : true,
        message : device
    })
}

export default { index }