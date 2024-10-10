import { DataFromServerTypes } from '../types'

const getDataFromServer = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) =>
            data
                .map((item: DataFromServerTypes) => {
                    const result = {
                        address: {
                            city: item.address.city,
                            street: item.address.street,
                            zipCode: item.address.zipCode,
                        company: {
                            name: item.company.name,
                        },
                            name: item.name,
                            userName: item.userName,
                            email: item.email,
                            phone: item.phone,
                            website: item.website,
                        }
                    }
                return result
                )
                .then((data: DataFromServerTypes) => console.log(data)),
        )
}

export default getDataFromServer
