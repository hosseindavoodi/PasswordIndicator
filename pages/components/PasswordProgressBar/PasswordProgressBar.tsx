import {  useMemo } from 'react'
import clsx from 'clsx'

const PasswordProgressBar = (( ) => {
 
  const progressBarItems = [
    {
      id: 1,
      item: true,
      text: 'Has to be at least 8 characters long'
    },
    { id: 2, item: true, text: 'Has at least 1 number' },
    {
      id: 3,
      item: true,
      text: 'Has at least 1 character'
    },
    {
      id: 4,
      item: false
    },
    {
      id: 5,
      item: false
    }
  ]

  const count = progressBarItems.filter(value => value.item).length

  const none = 'Weak password'
  const basic = 'Weak password'
  const mid = 'Weak password'
  const sufficient = 'Sufficient password'
  const strong = 'Strong password'
  const allStar = 'Strong password'

  const { barText, textColor, barWidth, bgColor } = useMemo(() => {
    let bgColor
    let textColor
    let barWidth
    let barText

    switch (count) {
      case 0:
        bgColor = 'bg-slate-300'
        textColor = 'text-slate-400'
        barWidth = 'w-10'
        barText = none
        break
      case 1:
        bgColor = 'bg-slate-300'
        textColor = 'text-slate-400'
        barWidth = 'w-1/5'
        barText = basic
        break
      case 2:
        bgColor = 'bg-slate-300'
        textColor = 'text-slate-400'
        barWidth = 'w-1/3'
        barText = mid
        break
      case 3:
        bgColor = 'bg-orange-500'
        textColor = 'text-orange-500'
        barWidth = 'w-2/3'
        barText = sufficient
        break
      case 4:
        bgColor = 'bg-green-500'
        textColor = 'text-green-500'
        barWidth = 'w-5/6'
        barText = strong
        break
      case 5:
        bgColor = 'bg-green-500'
        textColor = 'text-green-500'
        barWidth = 'w-full'
        barText = allStar
        break
    }
    return { barText, textColor, barWidth, bgColor }
  }, [count, none, basic, mid, sufficient, strong, allStar])

  return (
    <div className="col-span-1 xs:col-span-2">
      <div className="w-full bg-slate-200 rounded-full h-6">
        <div
          className={`h-full rounded-full transition-width duration-500 ease-in-out ${barWidth} ${bgColor}`}
        ></div>
      </div>
      <p className={`mt-2 mb-8 ${textColor}`}>{barText}</p>
      <ul>
        {progressBarItems.map(items => (
          <li
            key={items.id}
            className={clsx(
              'flex mb-4 items-center',
              items.item ? 'text-green-500' : 'text-slate-400'
            )}
          >
            <p>{items.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default PasswordProgressBar
