import { random } from "faker";

export const mockUserValid = {
  id: random.uuid(),
  name: "Freddie Kruger",
  address: {
    zipCode: "3522 VM",
    streetName: "First Av",
    city: "Amsterdam",
    country: "Netherlands",
    houseNumber: "290 A"
  },
  email: "email@mail.com",
  phone: "+51062778899",
  monthlyIncome: 10000,
  permissions: ["A"]
};

export const mockUserInvalidEmail = {
  id: random.uuid(),
  name: "Andrew Stone",
  address: {
    zipCode: "3522 VM",
    streetName: "First Av",
    city: "Amsterdam",
    country: "Netherlands",
    houseNumber: "290 A"
  },
  email: "emailmail.com",
  phone: "+51062778899",
  monthlyIncome: 2000,
  permissions: ["A", "B", "D"]
};

export const mockUserInvalidPermission = {
  id: random.uuid(),
  name: "Andrew Stone",
  address: {
    zipCode: "3522 VM",
    streetName: "First Av",
    city: "Amsterdam",
    country: "Netherlands",
    houseNumber: "290 A"
  },
  email: "email@mail.com",
  phone: "+51062778899",
  monthlyIncome: 2000,
  permissions: ["B", "D"]
};
