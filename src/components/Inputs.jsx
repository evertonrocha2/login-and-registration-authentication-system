// eslint-disable-next-line react/prop-types
export default function Inputs({ labelValue, inputType, id }) {
    return (
        <div className="flex flex-col gap-[1.2px]">
            <label>
                {labelValue}
            </label>
            <input id={id} type={inputType} className="bg-[#F0F0F0] py-2 px-2" />
        </div>
    )
}