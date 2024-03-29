import React from 'react'
import { BiSolidStar } from 'react-icons/bi'
import { BsSearch } from 'react-icons/bs'
import { Datepicker, Accordion } from 'flowbite-react';

const Filter = () => {
        return (
                <div className="w-full">
                        <div className="md:hidden border-y py-3">
                                <div className='mb-4 bg-[color:var(--primary-color)] px-4 py-3 rounded font-bold text-white'>
                                        Sort & Filter
                                </div>
                                <div className="flex">
                                        <div className="">
                                                <Datepicker />
                                        </div>
                                </div>
                        </div>

                        <div className="md:block hidden">
                                <div className='w-full mb-4 bg-[color:var(--primary-color)] px-4 py-3 rounded font-bold text-white'>
                                        Sort & Filter
                                </div>
                                <div className='border py-1 rounded flex gap-3'>
                                        <select className='cursor-pointer w-full border-none  border-l border-r focus-input-none' name="" id="">
                                                <option value="">Việt Nam</option>
                                                <option value="">Thailand</option>
                                                <option value="">Italia</option>
                                                <option value="">Australia</option>
                                                <option value="">Argentina</option>
                                        </select>
                                </div>
                                <div className='w-full mt-6 border p-4 rounded'>
                                        <div>
                                                <Accordion className='border-none'>
                                                        <Accordion.Panel>
                                                                <Accordion.Title className='text-black hover:bg-transparent focus:ring-0 px-0 bg-transparent'><p className='text-sm font-bold'>Thời gian</p></Accordion.Title>
                                                                <Accordion.Content>
                                                                        <div className='w-full bg-white h-[10px] border rounded-full'>
                                                                                <div className='w-[80%] h-full bg-blue-500 relative'>
                                                                                        <div className='absolute w-full h-full flex justify-between left-0 top-[-50%] items-center'>
                                                                                                <button className='absolute rounded-full border border-gray-800 bg-white w-4 h-4 left-[-1%] top-0'></button>
                                                                                                <button className='absolute rounded-full border border-gray-800 bg-white w-4 h-4 right-[-1%] top-0'></button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className='flex justify-between items-center text-xs mt-2'>
                                                                                <p className='font-medium'><span>min. </span><span>1days</span></p>
                                                                                <p className='font-medium'><span>max. </span><span>21days</span></p>
                                                                        </div>
                                                                </Accordion.Content>
                                                        </Accordion.Panel>
                                                </Accordion>
                                        </div>
                                        {/* Ngày khởi hành */}

                                        <div className='mt-4 pt-4 border-t-2'>
                                                <Accordion className='border-none'>
                                                        <Accordion.Panel>
                                                                <Accordion.Title className='text-black hover:bg-transparent focus:ring-0 px-0 bg-transparent'><p className='text-sm font-bold'>Ngày khởi hành</p></Accordion.Title>
                                                                <Accordion.Content>
                                                                        <Datepicker className='' />

                                                                </Accordion.Content>
                                                        </Accordion.Panel>
                                                </Accordion>
                                        </div>
                                        <div className='mt-4 pt-4 border-t-2'>
                                                <Accordion className='border-none'>
                                                        <Accordion.Panel>
                                                                <Accordion.Title className='text-black hover:bg-transparent focus:ring-0 px-0 bg-transparent'><p className='text-sm font-bold'>Giá</p></Accordion.Title>
                                                                <Accordion.Content>
                                                                        <div className='grid grid-cols-2 rounded overflow-hidden border w-[80%] mx-auto'>
                                                                                <button className="py-3 w-full text-xs font-bold bg-[color:var(--primary-color)] text-white">Giá theo người</button>
                                                                                <button className="py-3 w-full text-xs font-bold">Giá theo ngày</button>
                                                                        </div>
                                                                        <div className='mt-4 w-full bg-white h-[10px] border rounded-full'>
                                                                                <div className='w-[80%] h-full bg-blue-500 relative'>
                                                                                        <div className='absolute w-full h-full flex justify-between left-0 top-[-50%] items-center'>
                                                                                                <button className='absolute rounded-full border border-gray-800 bg-white w-4 h-4 left-[-1%] top-0'></button>
                                                                                                <button className='absolute rounded-full border border-gray-800 bg-white w-4 h-4 right-[-1%] top-0'></button>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </Accordion.Content>
                                                        </Accordion.Panel>
                                                </Accordion>
                                        </div>
                                        <div className='mt-4 pt-4 border-t-2'>
                                                <Accordion className='border-none'>
                                                        <Accordion.Panel>
                                                                <Accordion.Title className='text-black hover:bg-transparent focus:ring-0 px-0 bg-transparent'><p className='text-sm font-bold'>Thành phố bắt đầu và kết thúc</p></Accordion.Title>
                                                                <Accordion.Content>
                                                                        <select className='mt-4 cursor-pointer w-full rounded border-l border-r focus-input-none' name="" id="">
                                                                                <option value="" disabled>Nhập thành phố bắt đầu</option>
                                                                                <option value="">Hà Nội</option>
                                                                                <option value="">Thành phố Hồ Chí Minh</option>
                                                                                <option value="">Bangkok</option>
                                                                                <option value="">Canberra</option>
                                                                                <option value="">Buenos Aires</option>
                                                                        </select>
                                                                        <select className='mt-4 cursor-pointer w-full rounded border-l border-r focus-input-none' name="" id="">
                                                                                <option value="" disabled>Nhập thành phố kết thúc</option>
                                                                                <option value="">Thành phố Hồ Chí Minh</option>
                                                                                <option value="">Hà Nội</option>
                                                                                <option value="">Bangkok</option>
                                                                                <option value="">Canberra</option>
                                                                                <option value="">Buenos Aires</option>
                                                                        </select>
                                                                </Accordion.Content>
                                                        </Accordion.Panel>
                                                </Accordion>
                                        </div>
                                        <div className='mt-4 pt-4 border-t-2'>
                                                <Accordion className='border-none'>
                                                        <Accordion.Panel>
                                                                <Accordion.Title className='text-black hover:bg-transparent focus:ring-0 px-0 bg-transparent'><p className='text-sm font-bold'>Độ tuổi</p></Accordion.Title>
                                                                <Accordion.Content>
                                                                        <div className='mt-4 grid grid-cols-2 gap-3'>
                                                                                <button className='rounded w-full border py-2 text-sm'>18 - 29</button>
                                                                                <button className='rounded w-full border py-2 text-sm'>30+</button>
                                                                                <button className='rounded w-full border py-2 text-sm'>40+</button>
                                                                                <button className='rounded w-full border py-2 text-sm'>50+</button>
                                                                                <button className='rounded w-full border py-2 text-sm'>60+</button>
                                                                                <button className='rounded w-full border py-2 text-sm'>70+</button>
                                                                        </div>
                                                                </Accordion.Content>
                                                        </Accordion.Panel>
                                                </Accordion>
                                        </div>

                                        {/* Trẻ em */}
                                        <div className='mt-4 pt-4 border-t-2'>
                                                <Accordion className='border-none'>
                                                        <Accordion.Panel>
                                                                <Accordion.Title className='text-black hover:bg-transparent focus:ring-0 px-0 bg-transparent'><p className='text-sm font-bold'>Hoặc lọc theo chuyến thân thiện với trẻ em</p></Accordion.Title>
                                                                <Accordion.Content>
                                                                        <select className='mt-4 cursor-pointer w-full rounded border-l border-r focus-input-none' name="" id="">
                                                                                <option value="" disabled>Tuổi</option>
                                                                                <option value="">Dưới 1 tuổi</option>
                                                                                <option value="">1 tuổi</option>
                                                                                <option value="">2 - 5 tuổi</option>
                                                                                <option value="">6 -12 tuổi</option>
                                                                                <option value="">12 - 18 tuổi</option>
                                                                        </select>
                                                                </Accordion.Content>
                                                        </Accordion.Panel>
                                                </Accordion>
                                        </div>

                                        <div className='mt-4 pt-4 border-t-2'>
                                                <Accordion className='border-none'>
                                                        <Accordion.Panel>
                                                                <Accordion.Title className='text-black hover:bg-transparent focus:ring-0 px-0 bg-transparent'><p className='text-sm font-bold'>Loại phiêu lưu</p></Accordion.Title>
                                                                <Accordion.Content>
                                                                        <div className='py-1.5 flex items-center w-full gap-4'>
                                                                                <input type="checkbox" />
                                                                                <div className='flex flex-1 justify-between'>
                                                                                        <span className='w-3/5 mr-2 line-clamp-1'>Văn hóa</span>
                                                                                        <span className='flex justify-seft-end'>816</span>
                                                                                </div>

                                                                        </div>
                                                                        <div className='py-1.5 flex items-center w-full gap-4'>
                                                                                <input type="checkbox" />
                                                                                <div className='flex flex-1 justify-between'>
                                                                                        <span className='w-3/5 mr-2 line-clamp-1'>Thám hiểm</span>
                                                                                        <span className='flex justify-seft-end'>466</span>
                                                                                </div>

                                                                        </div>
                                                                        <div className='py-1.5 flex items-center w-full gap-4'>
                                                                                <input type="checkbox" />
                                                                                <div className='flex flex-1 justify-between'>
                                                                                        <span className='w-3/5 mr-2 line-clamp-1'>Lễ hội & Sự kiện</span>
                                                                                        <span className='flex justify-seft-end'>324</span>
                                                                                </div>

                                                                        </div>
                                                                        <div className='py-1.5 flex items-center w-full gap-4'>
                                                                                <input type="checkbox" />
                                                                                <div className='flex flex-1 justify-between'>
                                                                                        <span className='w-3/5 mr-2 line-clamp-1'>Đi bộ & Leo núi</span>
                                                                                        <span className='flex justify-seft-end'>256</span>
                                                                                </div>

                                                                        </div>
                                                                        <div className='py-1.5 flex items-center w-full gap-4'>
                                                                                <input type="checkbox" />
                                                                                <div className='flex flex-1 justify-between'>
                                                                                        <span className='w-3/5 mr-2 line-clamp-1'>Ẩm thực</span>
                                                                                        <span className='flex justify-seft-end'>214</span>
                                                                                </div>

                                                                        </div>
                                                                        <div className='py-1.5 flex items-center w-full gap-4'>
                                                                                <input type="checkbox" />
                                                                                <div className='flex flex-1 justify-between'>
                                                                                        <span className='w-3/5 mr-2 line-clamp-1'>Sức khỏe</span>
                                                                                        <span className='flex justify-seft-end'>198</span>
                                                                                </div>

                                                                        </div>
                                                                        <div className='py-1.5 flex items-center w-full gap-4'>
                                                                                <input type="checkbox" />
                                                                                <div className='flex flex-1 justify-between'>
                                                                                        <span className='w-3/5 mr-2 line-clamp-1'>Giáo dục</span>
                                                                                        <span className='flex justify-seft-end'>112</span>
                                                                                </div>

                                                                        </div>
                                                                </Accordion.Content>
                                                        </Accordion.Panel>
                                                </Accordion>
                                        </div>
                                </div>
                                {/* Hotline hỗ trợ */}
                                <div className="mt-6 w-full border p-4 rounded">
                                        <div className="flex gap-2">
                                                <div className="w-24 h-24 bg-no-repeat bg-center bg-cover rounded-full" style={{ backgroundImage: 'url("https://cdn1.ivivu.com/iVivu/2018/12/04/09/undefined-2.png")' }}></div>
                                                <div className="flex flex-col justify-between">
                                                        <h2 className="text-xl font-bold">Cần hỗ trợ?</h2>
                                                        <p className="flex gap-6"><span className="w-1/4 text-center">HCM</span><span className="text-orange-500">1900 1234</span></p>
                                                        <p className="flex gap-6"><span className="w-1/4 text-center">HN</span><span className="text-orange-500">1900 1234</span></p>
                                                        <p className="flex gap-6"><span className="w-1/4 text-center">HCM</span><span className="text-orange-500">1900 1234</span></p>
                                                </div>
                                        </div>
                                </div>
                                {/* Tìm khách sạn */}
                                <div className="w-full border p-4 rounded mt-4">
                                        <div className="flex">
                                                <div className="flex items-center border rounded w-full">
                                                        <input type="text" className='border-transparent w-[90%] bg-[transparent] caret-[#fe2c55] text-sm h-full focus:outline-none focus:border-[transparent] focus-input-none flex items-center placeholder-gray-600' placeholder='Nhập tên khách sạn' />
                                                        <button className="border-l h-full px-3">
                                                                <BsSearch />
                                                        </button>
                                                </div>
                                        </div>
                                        {/* Hạng sao */}
                                        <div className="border-t mt-5 flex flex-col gap-4 py-4">
                                                <h6 className="font-medium">Hạng sao</h6>
                                                <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                        <input type="checkbox" className='rounded hover:border-blue-500' />
                                                        <div className="flex items-center gap-1">
                                                                <BiSolidStar color="#FDBF65" />
                                                                <BiSolidStar color="#FDBF65" />
                                                                <BiSolidStar color="#FDBF65" />
                                                                <BiSolidStar color="#FDBF65" />
                                                                <BiSolidStar color="#FDBF65" />
                                                        </div>
                                                </div>
                                                <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                        <input type="checkbox" className='rounded hover:border-blue-500' />
                                                        <div className="flex items-center gap-1">
                                                                <BiSolidStar color="#FDBF65" />
                                                                <BiSolidStar color="#FDBF65" />
                                                                <BiSolidStar color="#FDBF65" />
                                                                <BiSolidStar color="#FDBF65" />
                                                        </div>
                                                </div>
                                                <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                        <input type="checkbox" className='rounded hover:border-blue-500' />
                                                        <div className="flex items-center gap-1">
                                                                <BiSolidStar color="#FDBF65" />
                                                                <BiSolidStar color="#FDBF65" />
                                                                <BiSolidStar color="#FDBF65" />
                                                        </div>
                                                </div>
                                                <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                        <input type="checkbox" className='rounded hover:border-blue-500' />
                                                        <div className="flex items-center gap-1">
                                                                <BiSolidStar color="#FDBF65" />
                                                                <BiSolidStar color="#FDBF65" />
                                                        </div>
                                                </div>
                                                <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                        <input type="checkbox" className='rounded hover:border-blue-500' />
                                                        <div className="flex items-center gap-1">
                                                                <BiSolidStar color="#FDBF65" />
                                                        </div>
                                                </div>
                                        </div>
                                        {/* Khu vực */}
                                        <div className="border-t mt-5 flex flex-col gap-4 py-4">
                                                <h6 className="font-medium">Khu vực</h6>
                                                <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                        <input type="checkbox" className='rounded hover:border-blue-500' />
                                                        <p>Hà Nội (4)</p>
                                                </div>
                                                <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                        <input type="checkbox" className='rounded hover:border-blue-500' />
                                                        <p>Đà Nẵng (3)</p>
                                                </div>
                                                <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                        <input type="checkbox" className='rounded hover:border-blue-500' />
                                                        <p>Thành Phố Hồ Chí Minh (2)</p>
                                                </div>
                                        </div>
                                        {/* Loại hình nơi ở */}
                                        <div className="border-t mt-5 flex flex-col gap-4 py-4">
                                                <h6 className="font-medium">Loại hình nơi ở</h6>
                                                <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                        <input type="checkbox" className='rounded hover:border-blue-500' />
                                                        <p>Khu nghỉ dưỡng</p>
                                                </div>
                                        </div>
                                        {/* Tiện ích */}
                                        <div className="border-t mt-5 flex flex-col gap-4 py-4">
                                                <h6 className="font-medium">Tiện ích</h6>
                                                <div className="flex gap-4 items-center hover:text-[color:var(--primary-color)]">
                                                        <input type="checkbox" className='rounded hover:border-blue-500' />
                                                        <p>Phòng gia đình</p>
                                                </div>
                                        </div>
                                </div>

                                {/* Kinh nghiệm du lịch */}
                                <div className="w-full border rounded mt-4">
                                        <h1 className='bg-[#ccc] p-4 font-medium'>Kinh nghiệm du lịch Hà Nội</h1>
                                        <div className="p-4 text-sm flex flex-col gap-3">
                                                <p>Ngoài những địa chỉ quen thuộc như hồ Xuân Hương, đỉnh Langbiang, dinh Bảo Đại hay thiền viện Trúc Lâm,... bạn có biết Đà Lạt còn nhiều thứ tuyệt vời khác nữa không?</p>
                                                <p>Nhất định bạn phải thưởng thức món nem nướng, sữa đậu nành nóng hay bánh ướt lòng gà ngon nức tiếng. Chưa hết đâu, bạn còn phải đến thăm thác Voi - nơi có cầu vồng suốt ngày hay bãi Tiên Sa, hồ Đại Ninh nữa nhé. Hãy để iVIVU.com mách bạn!</p>
                                        </div>
                                </div>
                        </div>

                </div>
        )
}

export default Filter
