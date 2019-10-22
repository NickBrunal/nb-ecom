import {
    SET_USER_PURCHASES
} from './types';

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0048248343',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State St'
                }
            },
            {
                _id: 1,
                total: 1.40,
                orderNumber: 'B0054499882',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Maxwell Nelson',
                    shippingAddress: '1337 West State St'
                }
            },
            {
                _id: 2,
                total: 14.29,
                orderNumber: 'C0012332109',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Nicholas Brunal',
                    shippingAddress: '831 West State St'
                }
            },
            {
                _id: 3,
                total: 5.42,
                orderNumber: 'D0085044983',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jessica Brunal',
                    shippingAddress: '4321 West State St'
                }
            },
            {
                _id: 4,
                total: 19.95,
                orderNumber: 'E0033062586',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Grayson Brunal',
                    shippingAddress: '82218 West State St'
                }
            },
            {
                _id: 5,
                total: 29.27,
                orderNumber: 'F00808020',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Casteel',
                    shippingAddress: '8137 West State St'
                }
            },
            {
                _id: 6,
                total: 13.21,
                orderNumber: 'G008675309',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Madison Colmogern',
                    shippingAddress: '8008 West State St'
                }
            },
            {
                _id: 7,
                total: 100.69,
                orderNumber: 'H009876121',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Ryan Serhant',
                    shippingAddress: '2121 West State St'
                }
            },
        ]
    })
}