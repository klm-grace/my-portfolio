import A from "@/assets/arrow.svg?react"

const Arrow = ({ className, w = 77, h = 45, angle = -15 }: { className?: string, w?: number, h?: number, angle?: number }) => {
    return <A style={{ transform: `rotate(${angle}deg)` }} className={`${className}`} width={w} height={h} />
}

export default Arrow