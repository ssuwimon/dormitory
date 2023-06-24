//import icon
import {AiFillHome} from 'react-icons/ai'
import {RiDashboardFill,RiMoneyDollarCircleFill,RiDoorOpenFill} from 'react-icons/ri'
import {HiUsers} from 'react-icons/hi'
import {IoIosPaper} from 'react-icons/io'
import {FaTachometerAlt} from 'react-icons/fa'

interface MenuProps {
    label: string,
    icon: React.ReactNode,
    link?: string
}

export const menuData: MenuProps[] = [
    {
        label: 'Dashboard',
        icon: <RiDashboardFill size={28} />,
        link: '/room'

    },{
        label: 'Home',
        icon: <AiFillHome size={28}/>,
        link: '/home'

    },{
        label: 'Room Management',
        icon: <RiDoorOpenFill size={28}/>,
        link: '/room'
    },{
        label: 'users Management',
        icon: <HiUsers size={28}/>,
        link: '/users'

    },{
        label: 'Finance',
        icon: <RiMoneyDollarCircleFill size={28}/>,
        link: '/room'

    },{
        label: 'Meter',
        icon: <FaTachometerAlt size={28}/>,
        link: '/room'

    },{
        label: 'Report',
        icon: <IoIosPaper size={28}/>, 
        link: '/room'

    }

]
