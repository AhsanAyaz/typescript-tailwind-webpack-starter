import { greet } from "./index"

describe('greeter', () => {
  it('should return the message from the method', () => {
    const message = greet();
    expect(message).toBe('Hello World from Code with Ahsan!')
  })
})
