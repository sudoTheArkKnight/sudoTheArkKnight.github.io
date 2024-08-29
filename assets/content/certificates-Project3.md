### Certifications Viewer

#### Project Overview
The Certifications Viewer is a streamlined web application designed to allow users to view their certifications by entering their roll number. This application simplifies the process of accessing digital certificates, providing a user-friendly interface for students and other stakeholders.

View on [GitHub](https://github.com/sudoTheArkKnight/DigitCertificateDistributionSystem)

#### Features

- **Roll Number Input**: Users enter their roll number in an input field provided on the web page.
- **Form Submission**: Upon submission, the application captures the roll number and redirects the user to the corresponding PDF certificate.
- **PDF Certificate Viewer**: Certificates are stored in a designated `/certificates` folder, named after the roll number (e.g., `12345.pdf`).

#### Technical Details

**HTML Structure**
The HTML file (`index.html`) is the backbone of the application, containing a simple form where users input their roll number. This form is styled with CSS to be centered on the page, providing a clean and focused user experience.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Certifications</title>
    <style>
        * { background-color: bisque; }
        body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        form { display: flex; flex-direction: column; align-items: center; }
    </style>
</head>
<body>
    <form action="/checking.js" method="get">
        Enter the Roll number:
        <input type="text" name="rollno" id="rollno"> <br/>
        <input type="submit" name="submit" value="Submit">
    </form>
    <script src="checking.js"></script>
</body>
</html>
```

**JavaScript Logic**
The JavaScript file (`checking.js`) manages the form submission, extracting the roll number and constructing the URL for the PDF certificate.

```javascript
const form = document.querySelector('form');
const rollnoInput = document.querySelector('#rollno');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent default form submission
    const rollno = rollnoInput.value.trim();
    const pdfUrl = `/certificates/${rollno}.pdf`; // assuming PDF files are in /certificates folder
    window.location.href = pdfUrl;
});
```

#### Vercel Configuration
The `vercel.json` file configures the deployment on Vercel, mapping the `/api/checking` path to the `/api/checking.js` file for proper request handling.

```json
{
  "rewrites": [{ "source": "/api/checking", "destination": "/api/checking.js" }]
}
```

#### Installation and Deployment

To deploy this application, follow these steps:
1. Clone the repository to your local machine.
2. Create a new Vercel project and link it to your GitHub repository.
3. Configure the `vercel.json` file to point to the correct `/api/checking.js` file.
4. Deploy the application to Vercel using the `vercel build` and `vercel deploy` commands.

#### Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

#### License
This project is licensed under the MIT License. See the LICENSE file for details.
