import { mockUserValid, mockUserInvalidEmail, mockUserInvalidPermission } from "./mock";
import saveUser from './index'

describe("index.js", () => {
  it("should get formatted user information with random ID", () => {
    const db = {
      init: jest.fn(),
      save: jest.fn()
    };
    saveUser(mockUserValid, db);
    expect(db.save).toHaveBeenCalledWith(
        expect.objectContaining({
          id: expect.any(Number)
        })
    )
  });

  it("should throw an exception if user email doesnt match regex", () => {
    const db = {
      init: jest.fn(),
      save: jest.fn()
    };
    expect(() => saveUser(mockUserInvalidEmail, db)).toThrow(new Error('Something went wrong'));
  });

  it("should throw an exception if user has no phone", () => {
    const db = {
      init: jest.fn(),
      save: jest.fn()
    };
    const userWithoutPhone = {...mockUserValid, phone: null};
    expect(() => saveUser(userWithoutPhone, db)).toThrow(new Error('Something went wrong'));
  });

  it("should throw an exception if user has no A as permission and not enough income", () => {
    const db = {
      init: jest.fn(),
      save: jest.fn()
    };
    expect(() => saveUser(mockUserInvalidPermission, db)).toThrow(new Error('No enough annual income'));
  });
});
