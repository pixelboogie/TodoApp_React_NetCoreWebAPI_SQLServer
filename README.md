# TodoApp_React_NetCoreWebAPI_SQLServer

## Description
**TodoApp_React_NetCoreWebAPI_SQLServer** is a full-stack application developed as part of the video tutorial "Build app using React JS, .NET Core Web API and Microsoft SQL Server" by Art of Engineer. The application demonstrates how to create a simple Todo list app using a React front-end, a .NET Core Web API back-end, and a Microsoft SQL Server database hosted on Microsoft Azure.

This repository should be paired with the backend repository: `TodoApp_React_NetCoreWebAPI_SQLServer_Backend`.

## Technologies Used
- **React.js**: JavaScript library for building the user interface.
- **.NET Core Web API**: Framework for building the back-end API.
- **Microsoft SQL Server**: Database management system used to store Todo items.
- **Microsoft Azure**: Cloud service used for hosting the SQL Server database.

## Installation

### Start the Back End
1. **Open Visual Studio** and open the project: `TodoApp_React_NetCoreWebAPI_SQLServer`.
2. **Add Credentials**: In the `appSettings.json` file, add the credentials for the Azure server and database admin.
3. **Compile and Run**:
   - Click the compile button in Visual Studio to start the web application.
   - In the browser, you should be able to use the Swagger page to test the `GET`, `POST`, and `DELETE` endpoints.

### Start the Front End
1. **Open VS Code**: Open the workspace for the React app.
2. **Navigate to the Front-End Folder**:
   - Open an explorer window to the folder where the front-end is located (e.g., `...\TodoApp_React_NetCoreWebAPI_SQLServer\ui\todoapp`).
   - In the folder, place the mouse cursor in the address bar and type `cmd` to launch a console in that folder.
3. **Start the React Project**:
   - Enter the command `npm start` to start the React project.
   - It should provide a localhost URL for testing, such as `http://localhost:3000`.

## Usage
Once both the front-end and back-end are running, you can interact with the Todo app through the React front-end. You can add, view, delete, and update Todo items, with the data being stored and retrieved from the SQL Server database hosted on Azure.

## Additional Information
- **Video Tutorial**: The project is based on the video tutorial by Art of Engineer, which can be found [here](https://www.youtube.com/watch?v=O5hKoBV3vaU).
- **Related Repository**: Make sure to check out the backend repository: `TodoApp_React_NetCoreWebAPI_SQLServer_Backend`.

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. You can also open issues to report bugs or suggest new features.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more information.

