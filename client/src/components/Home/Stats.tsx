
type StatsInfo = {
    title: string,
    count: string | number
}

const statsInfo: StatsInfo[] = [
    {
        title: 'Students',
        count: 1200
    },
    {
        title: 'Research Projects',
        count: 43
    },
    {
        title: 'MA Programs',
        count: 2
    },
    {
        title: 'Scholarships',
        count: '50%'
    }
]

const Stats = () => {
  return (
    <div className='space-y-6 md:flex md:space-x-6 md:space-y-0'>
        {statsInfo.map((info, index) => (
        <div key={index} className='text-center text-gray-950 space-y-2 border-[#79FAC5]
        border-x-4
        py-4 px-4 rounded-3xl hover:bg-[#79FAC5] transition-colors
        duration-300'>
            <h1 className='text-5xl font-extrabold'>
                {info.count}
            </h1>
            <h2 className='text-xl font-medium'>
                {info.title}
            </h2>
        </div>
        ))}
    </div>
  )
}

export default Stats