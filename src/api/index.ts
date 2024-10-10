import { DataFromServerTypes } from '../types'

import { LOCAL_STORAGE_KEYS, URL_SERVER } from '../constants'

const getDataFromServer = async () => {
    await fetch(URL_SERVER)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()
        })
        .then((data: DataFromServerTypes[]) => {
            const result = data.map((item) => {
                return {
                    address: {
                        city: item.address.city,
                        street: item.address.street,
                        zipCode: item.address.zipCode,
                    },
                    company: {
                        name: item.company.name,
                    },
                    name: item.name,
                    userName: item.userName,
                    email: item.email,
                    phone: item.phone,
                    website: item.website,
                }
            })
            return result
        })
        .then((data) => {
            localStorage.setItem(
                LOCAL_STORAGE_KEYS.CONTENT,
                JSON.stringify(data),
            )
        })
}

export default getDataFromServer
