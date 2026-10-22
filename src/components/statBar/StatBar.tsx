import './StatBar.css'

interface StatBarProps {
    label: string
    value: number
    max?: number   
}

function StatBar({ label, value, max = 255 }: StatBarProps) {
    const percent = Math.min((value / max) * 100, 100)

    return (
        <div className="stat">
            <span className="stat-label">{label}</span>
            <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${percent}%` }} />
            </div>
            <strong>{value}</strong>
        </div>
    )
}

export default StatBar