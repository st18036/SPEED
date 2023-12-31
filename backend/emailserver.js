const transporter = nodemailer.createTransport({
    service: "gmail", // Use a colon, not an equal sign
    auth: {
        user: 'cloudtechnology8@gmail.com',
        pass: 'wodm vrhh iubf uucz'
    }
});


app.post("/sendmail", (req, res) => {
    const { to, subject, message } = req.body;

    const mailOptions = {
        from: process.env.AUTH_EMAIL,
        to: to,
        subject: subject,
        text: message
    }

    transporter_pro
        .sendMail(mailOptions)
        .then(() => {
            res.sendFile(path.join(__dirname, "./views/success.html"));
        })
        .catch((error) => {
            console.log(error);
            res.json({ status: "Failed", message: "An error occurred" }); // Fixed the syntax error here
        });
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`); // Use backticks (`) to interpolate the port variable
});
