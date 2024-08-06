# Vehicle Builder

## Description

The Vehicle Builder is a TypeScript command-line application that allows users to create and manage different types of vehicles, including cars, trucks, and motorbikes. Users can perform specific actions with each vehicle type, leveraging the capabilities of Object-Oriented Programming (OOP) principles. This project demonstrates the integration of multiple skills, including TypeScript, class inheritance, and user interaction via the Inquirer package.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Classes and Methods](#classes-and-methods)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/vehicle-builder.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd vehicle-builder
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

## Usage

To start the application, run the following command:

```bash
npm start
```

Follow the prompts to create a new vehicle or select an existing vehicle. You can then perform various actions with the selected vehicle until you decide to exit the application.

## Features

- Create new vehicles: car, truck, and motorbike.
- Select existing vehicles from a list.
- Perform actions specific to each vehicle type.
- Use the Inquirer package for a seamless command-line user experience.
- Demonstrates OOP principles with class inheritance and method overriding.

## Classes and Methods

### Vehicle

- **Properties:** `vin`, `make`, `model`, `wheels`
- **Constructor:** Initializes basic vehicle properties.

### Car (extends Vehicle)

- **Additional Properties:** None
- **Actions:** General vehicle actions.

### Truck (extends Vehicle)

- **Additional Properties:** `cargoCapacity`
- **Actions:** `findVehicleToTow`

### Motorbike (extends Vehicle)

- **Additional Properties:** None
- **Actions:** `wheelie`

## Walkthrough Video

A walkthrough video demonstrating the functionality of the Vehicle Builder can be found [here](https://link-to-your-video.com).

The video includes:

- Invoking the application from the command line.
- Entering responses to all prompts.
- Demonstrating the creation and selection of cars, trucks, and motorbikes.
- Performing actions specific to each vehicle type.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

By following this structure, the README provides a comprehensive overview of the project, making it easy for others to understand and contribute. Be sure to replace placeholder links and names with actual values relevant to your project.