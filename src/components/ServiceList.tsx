import { FaCheck } from "react-icons/fa6"
import { ServiceType } from "../types/ServiceType"

const ServiceList = ({ name }: ServiceType) => {
    return (
        <>
            <li className="flex cursor-pointer gap-2 items-center text-grey hover:text-yellow duration-500 text-[14px]"><FaCheck className="text-yellow" />{name}</li>
        </>
    )
}

export default ServiceList