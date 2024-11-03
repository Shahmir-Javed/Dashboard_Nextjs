'use client'
import React from 'react'
import Layout from '../component/layout'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Line, Circle } from 'rc-progress';
import CountUp from 'react-countup';

import SemiCircleProgressBar from "react-progressbar-semicircle";
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DvrIcon from '@mui/icons-material/Dvr';
export default function Dashboard() {
  return (
    <Layout>
      <div className='grid grid-cols-4 gap-6'>
        <div className='lg:col-span-1 sm:col-span-4'>
          <div className='mx-auto bg-sky-50 hover:scale-105 transition duration-150 rounded-lg shadow-lg'>
            <div className='flex justify-between'>
              <div className='mt-5 pl-5'>
                <PeopleAltIcon fontSize='large' />
              </div>
              <div className='ml-5 mt-5 roundprogress'>
                <Circle percent={86} strokeWidth={10} trailWidth={10} strokeColor="rgb(2, 132, 439)" trailColor='#D3D3D3' />
              </div>
            </div>
            <div className='mt-5 pb-5'>
              <div className='text-blue-500 pl-5'>
                TOTAL USERS
              </div>
              <div className='text-3xl pl-5 font-bold'>
                <CountUp end={1130} />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-1 sm:col-span-4'>
          <div className='mx-auto bg-sky-50 hover:scale-105 transition duration-150 rounded-lg shadow-lg'>
            <div className='flex justify-between'>
              <div className='mt-5 pl-5'>
                <AssignmentIcon fontSize='large' />
              </div>
              <div className='ml-5 mt-5 roundprogress'>
                <Circle percent={70} strokeWidth={10} trailWidth={10} strokeColor="#FDA204" trailColor='#D3D3D3' />
              </div>
            </div>
            <div className='mt-5 pb-5'>
              <div className='text-blue-500 pl-5'>
                PENDING TASK
              </div>
              <div className='text-3xl pl-5 font-bold'>
                <CountUp end={670} />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-1 sm:col-span-4'>
          <div className='mx-auto bg-sky-50 hover:scale-105 transition duration-150 rounded-lg shadow-lg'>
            <div className='flex justify-between'>
              <div className='mt-5 pl-5'>
                <CalendarMonthIcon fontSize='large' />
              </div>
              <div className='ml-5 mt-5 roundprogress'>
                <Circle percent={45} strokeWidth={10} trailWidth={10} strokeColor="#EB1A1A" trailColor='#D3D3D3' />
              </div>
            </div>
            <div className='mt-5 pb-5'>
              <div className='text-blue-500 pl-5'>
                MEETINGS
              </div>
              <div className='text-3xl pl-5 font-bold'>
                <CountUp end={30} />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:col-span-1 sm:col-span-4'>
          <div className='mx-auto bg-sky-50 hover:scale-105 transition duration-150 rounded-lg shadow-lg'>
            <div className='flex justify-between'>
              <div className='mt-5 pl-5'>
                <DvrIcon fontSize='large' />
              </div>
              <div className='ml-5 mt-5 roundprogress'>
                <Circle percent={92} strokeWidth={10} trailWidth={10} strokeColor="#21170C" trailColor='#D3D3D3' />
              </div>
            </div>
            <div className='mt-5 pb-5'>
              <div className='text-blue-500 pl-5'>
                ORDERS
              </div>
              <div className='text-3xl pl-5 font-bold'>
                <CountUp end={860} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-4 mt-10'>
        <div className='col-span-1 bg-blue-500  rounded-lg shadow-lg '>
          <div className='mt-5 mb-8 flex justify-center pb-5 font-bold  text-4xl text-white'>
            <SemiCircleProgressBar background='#FFBCF9' diameter={200} stroke='#67EE98' strokeWidth={15} percentage={83} showPercentValue />
          </div>
          <div className='mb-10'>
            <h1 className='text-3xl text-white text-center font-bold'>
              $123,344.84
            </h1>
            <h1 className=' text-white text-center'>
              Total Revenue
            </h1>
          </div>
        </div>


        <div className='col-span-'>
          <div className='lg:col-span-1 sm:col-span-4 mb-2'>
            <div className='mx-auto bg-sky-50 hover:scale-105 transition duration-150 rounded-lg shadow-lg'>
              <div className='flex justify-between'>
                <div className='mt-5 pl-5'>
                  <AssignmentIcon fontSize='large' />
                </div>
                <div className='ml-5 mt-5 roundprogress'>
                  <Circle percent={70} strokeWidth={10} trailWidth={10} strokeColor="rgb(2, 132, 439)" trailColor='#D3D3D3' />
                </div>
              </div>
              <div className='mt-5 pb-5'>
                <div className='text-blue-500 pl-5'>
                  PAID INVOICE
                </div>
                <div className='text-3xl pl-5 font-bold'>
                  <CountUp end={337} />
                </div>
              </div>
            </div>
          </div>
          <div className='lg:col-span-1 sm:col-span-4'>
            <div className='mx-auto bg-sky-50 hover:scale-105 transition duration-150 rounded-lg shadow-lg'>
              <div className='flex justify-between'>
                <div className='mt-5 pl-5'>
                  < DvrIcon fontSize='large' />
                </div>
                <div className='ml-5 mt-5 roundprogress'>
                  <Circle percent={77} strokeWidth={10} trailWidth={10} strokeColor="rgb(2, 132, 439)" trailColor='#D3D3D3' />
                </div>
              </div>
              <div className='mt-5 pb-5'>
                <div className='text-blue-500 pl-5'>
                  MARKET VALUE
                </div>
                <div className='text-3xl pl-5 font-bold'>
                  <CountUp end={100} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-2  rounded-lg shadow-lg '>
          <BarChart
            series={[
              { data: [35, 44, 24, 34] },
              { data: [51, 6, 49, 30] },
              { data: [15, 25, 30, 50] },
              { data: [60, 50, 15, 25] },
            ]}
            height={290}
            xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          />
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-5'>
        <div className='col-span-3  rounded-lg shadow-lg '>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, -5.5, 2, -7.5, 1.5, 6],
                area: true,
                baseline: 'min',
              },
            ]}
            width={970}
            height={300}
          />
        </div>

      </div>
    </Layout>
  )
} 
