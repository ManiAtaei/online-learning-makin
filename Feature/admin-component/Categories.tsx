/* eslint-disable tailwindcss/classnames-order */
import React, { useState } from 'react'; // Import useState
import { GrEdit } from "react-icons/gr";
import { GoTrash } from "react-icons/go";
import { IoCheckboxOutline } from "react-icons/io5";
import { CgCloseR } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi2";
import CategoryModal from './catmodal/CategoryModal'; // Import CategoryModal

function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const categories = [
    { id: 1, row: "۱", title: "Soft Skill مهارت های", coursesCount: "۰", date: "۱۴۰۳/۱۰/۰۵", isActive: false, },
    { id: 2, row: "۲", title: " برنامه نویسی Backend ", coursesCount: "۲", date: "۱۴۰۳/۱۰/۰۵", isActive: true, },
    { id: 3, row: "۳", title: " Design ", coursesCount: "۴", date: "۱۴۰۳/۱۰/۰۵", isActive: true, },
    { id: 4, row: "۴", title: " برنامه نویسی Frontend ", coursesCount: "۰", date: "۱۴۰۳/۱۰/۰۵", isActive: true, }
  ]

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='xl:px-20'>
      <div className='flex items-center justify-between mt-5 '>
        <input type="text" className='w-[420px] rounded-2xl border border-[#E0E0E0] px-4 py-2 text-gray-700 font-kalamehRegular text-base' placeholder='جست و جو  بر اساس نام دوره...' />
        <button
          className='w-[192px] rounded-lg bg-[#F28C28] px-6 py-2 text-white font-kalamehSemiBold text-base flex items-center justify-center gap-1'
          onClick={openModal} // Open modal on click
        >
          افزودن دسته بندی <HiOutlinePlus className='text-white size-6' />
        </button>
      </div>
      <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden h-[500px] mt-5 px-7 pt-2 pb-10">
        <div className="overflow-x-auto">
          <table className="w-full text-center">
            <thead className='bg-white border-b border-[#A9A9A9]'>
              <tr className="text-[20px] font-kalamehMedium">
                <th className="py-4 px-6 ">ردیف</th>
                <th className="py-4 px-6 "> عنوان دسته‌بندی </th>
                <th className="py-4 px-6"> تعداد دوره های دسته بندی </th>
                <th className="py-4 px-6 "> تاریخ ایجاد دسته‌بندی </th>
                <th className="py-4 px-6">
                  <span className='flex items-center justify-center'> وضعیت <FaAngleDown className='size-5 text-[#F28C28]' /> </span>
                </th>
                <th className="py-4 px-6">عملیات</th>
              </tr>
            </thead>
            <tbody className='[&>tr>td]:text-[18px] [&>tr>td]:font-kalamehRegular [&>tr>td]:p-6'>
              {categories.map((item, index) => (
                <tr
                  key={item.id}
                  className={index % 2 === 1 ? 'bg-[#F8F8F8]' : 'bg-white'}
                >
                  <td >{item.row}</td>
                  <td className='flex justify-center'>
                    {item.title}
                  </td>
                  <td>{item.coursesCount}</td>
                  <td >{item.date}</td>
                  <td>
                    <div className="flex items-center justify-center">
                      {item.isActive ? (
                        <div className="flex items-center gap-1">
                          <IoCheckboxOutline className="size-[24px] text-[#2ECC71] " />
                          فعال
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <CgCloseR className="size-[22px] text-[#FA2523] " />
                          غیر فعال
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-center gap-4">
                      <button className="text-[#36A8D9]">
                        <GrEdit className="size-5" />
                      </button>
                      <button className="text-[#FA2523]">
                        <GoTrash className="size-6" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render CategoryModal conditionally */}
      {isModalOpen && <CategoryModal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  )
}

export default Categories