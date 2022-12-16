declare namespace App {
  interface User {
    id: number
    email: string
    gender: string
    phone_number: string
    birthday: number
    username: string
    password: string
    first_name: string
    last_name: string
    title: string
    picture: string
    location: {
      street: string
      city: string
      state: string
      postcode: number
    }
  }
}
