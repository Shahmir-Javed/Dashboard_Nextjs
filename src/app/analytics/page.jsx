import React from 'react'
import Layout from '../component/layout'
import dynamic from 'next/dynamic'

const PieChart = dynamic(() => import('./charts/pirChart'), {
  loading: () => <h1>Chart Loading...</h1>
});

const AreaChart = dynamic(() => import('./charts/areaChart'), {
  loading: () => <h1>Chart Loading...</h1>
});

const ColumnChart = dynamic(() => import('./charts/colomChart'), {
  loading: () => <h1>Chart Loading...</h1>
});

const BarChart = dynamic(() => import('./charts/barChart'), {
  loading: () => <h1>Chart Loading...</h1>
});
export default function Analytics() {
  return (
    <Layout>
      <h1 className='text-2xl mb-2 '>Analytics</h1>

      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-5 rounded-lg shadow-2xl px-4 py-4 bg-white'>
          <PieChart />
        </div>

        <div className='col-span-7 rounded-lg shadow-2xl px-4 py-4 bg-white '>
          <AreaChart />
        </div>
      </div>

      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-6 rounded-lg shadow-2xl px-4 py-4 bg-white mt-5'>
          <ColumnChart />
        </div>
        <div className='col-span-6 rounded-lg shadow-2xl px-4 py-4 bg-white mt-5'>
          <BarChart />
        </div>
      </div>
    </Layout>
  )
}
