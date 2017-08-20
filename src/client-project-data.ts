export interface ClientProject {
  name: string;
  description: string;
}

export const ClientProjects: ClientProject[] = [
  { name: 'Conference Room Scheduling App', description: `
Developed an app to handle conference room reserving from start to finish, including:
<ul>
<li>Making design decisions such as making individual users the top of the data hierarchy instead
of the organization and using roles to manage permissions.</li>
<li>Helping fill out the Microsoft EntityFramework API with JWT User Authentication, password hashing,
handling refresh tokens, and DTO creation.</li>
<li>Creating a Web App "dashboard" in Angular 2+ for reserving and managing the reservations.</li>
<li>Creating a Mobile App in Ionic 2+ to act as the "kiosk" (embedded) frontend.</li>
<li>Creating a common library for both front ends (consisting of data fetching and styling directives).</li>
</ul>
`}, { name: 'Prototype Raw/CSV Data Parser', description: `
Helped finish a prototype application built using WPF (C#) that parsed/filtered data to export it into CSV files.
 My main responsibility was asynchronizing the file loading and data processing tasks to be able to handle
very large files.
`}, { name: 'BTLE Beacon Tech Implementation into a Secure Login Mobile App', description: `
Implemented iBeacon technology into a Secure Login mobile application to be able to detect "locations"
to sign into. This involved editing some native Android code from a Cordova plugin so that we could push
local notifications while the app was in the background or was "swiped off".
`}, { name: 'All-in-one Windows Installer', description: `
Helped create an "all-in-one" Windows Installer using the WiX framework to install .NET requirements,
drivers (silently!), and the actual application by downloading it from the internet. This project used
both WiX XML files and many small GO applications (to do more advance logic).
`}
];

export default ClientProjects;
