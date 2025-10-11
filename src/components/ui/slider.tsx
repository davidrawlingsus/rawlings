import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  min?: number
  max?: number
  step?: number
  value?: number
  onValueChange?: (value: number) => void
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, min = 0, max = 100, step = 1, value = 50, onValueChange, onChange, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value)
      onValueChange?.(newValue)
      onChange?.(e)
    }

    const percentage = ((value - min) / (max - min)) * 100

    return (
      <div className="relative w-full">
        <input
          type="range"
          ref={ref}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          className={cn(
            "w-full h-2 rounded-lg appearance-none cursor-pointer",
            "bg-neutral-200",
            "[&::-webkit-slider-thumb]:appearance-none",
            "[&::-webkit-slider-thumb]:w-5",
            "[&::-webkit-slider-thumb]:h-5",
            "[&::-webkit-slider-thumb]:rounded-full",
            "[&::-webkit-slider-thumb]:bg-neutral-900",
            "[&::-webkit-slider-thumb]:cursor-pointer",
            "[&::-webkit-slider-thumb]:hover:bg-neutral-800",
            "[&::-webkit-slider-thumb]:transition-colors",
            "[&::-moz-range-thumb]:w-5",
            "[&::-moz-range-thumb]:h-5",
            "[&::-moz-range-thumb]:rounded-full",
            "[&::-moz-range-thumb]:bg-neutral-900",
            "[&::-moz-range-thumb]:border-0",
            "[&::-moz-range-thumb]:cursor-pointer",
            "[&::-moz-range-thumb]:hover:bg-neutral-800",
            "[&::-moz-range-thumb]:transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          style={{
            background: `linear-gradient(to right, #171717 0%, #171717 ${percentage}%, #e5e5e5 ${percentage}%, #e5e5e5 100%)`
          }}
          {...props}
        />
      </div>
    )
  }
)

Slider.displayName = "Slider"

export { Slider }

