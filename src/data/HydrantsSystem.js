// import ReqDetails from '../../request/request-details'
// import utils from '../../utils/utils'
let hashTable = {}
let tempHashTable = {}
export default [{
    minWidth: '500px',
    flex: 2,
    vertical: true,
    children: [{
            flex: 4,
            component: {
                name: 'PositionBox',
                option: {
                    img: '/Three/ModelImages/xhs.png',
                    visible: false
                }
            }
        },

    ]
}, {
    minWidth: '700px',
    flex: 3,
    vertical: true,
    children: [{
            flex: 5,
            component: {
                name: 'PositionBox1',
                option: {
                    img: '/Four/ModelImages/xhs1.png',
                    visible: false
                }
            },
            linkHandler(data) {
                // let option = 12121
                this.path = data
                return data + 'asd' + this.path
            },
            path: ''
        },

    ]
}, ]