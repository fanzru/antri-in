import React, {useEffect} from "react";


export default function Jumbo(){

	

	const TempNomor = [
		{
		  Nomor : '001',
		},
		{
		  Nomor : '002',
		},
		{
		  Nomor : '003',
		},
	];
	return (
		<div class="flex h-screen items-center justify-center">
			<div class="bg-white w-[70%] border-4 border-gray-300 rounded-md shadow-[19px_16px_15px_-1px_rgba(0,0,0,0.29)]">
				<div className="p-5">
					<div className="border-b-4 border-black flex flex-col">
						<span className="text-center">Antrian</span>
						<p className="text-center text-[3rem] font-bold">Pengurus KTP Sebandungen misalnya weh</p>
					</div>
					<div className="grid grid-cols-3 gap-10 mt-16">
						<div className="col-span-2 relative">
							{/* List Nomor Antrian */}
							<div className="grid grid-cols-2 gap-3">
							{TempNomor.length != 0 ? TempNomor.map((Nomor,Index)=>{
								return (
									<div className={
										Index === 2 ? 'col-span-2 bg-red-500 p-8 grid place-items-center rounded-2xl' :
										'bg-red-500 p-8 grid place-items-center rounded-2xl'}>
										<div className={
											Index === 0 ? 'absolute -top-6' : 'hidden'}>
											<div className='bg-gray-800 flex justify-center px-5 py-3 rounded-xl'>
												<span className='font-bold text-white'>
													Berikutnya
												</span>
											</div>
										</div>
										
										<span className='font-semibold'>
											ANTRIAN KE-{Nomor.Nomor}
										</span>
									</div>
								);
							}) : <div className="text-center select-none font-bold pt-4">Antrian Tidak Tersedia</div>}
							</div> 
						</div>
						<div className='col-span-1'>
							<div className='mb-12 bg-red-200 relative justify-center items-center rounded-xl shadow-lg'>
								<div className='grid place-items-center pt-5'>
									<span className='font-semibold'>Antrian Saat Ini</span>
									<div className='pb-12 pt-2'>    
										<span className='text-8xl font-bold'>XXX</span>
									</div>
									<div className='absolute -bottom-8'>
										<div className='flex justify-center bg-red-500 py-5 px-10 text-white rounded-xl font-semibold'>
											<span>
											LOKET?
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}