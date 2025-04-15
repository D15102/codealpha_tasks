import { DropdownMenu } from '@radix-ui/themes'
const Navbar = () => {
  return (
    <div className='h-20 px-15 fixed'>
        <div className='w-full h-full flex items-center justify-between'>
            <img src="https://cdn-icons-png.flaticon.com/512/10001/10001425.png" 
            className='w-[2.8rem] h-[2.6rem] cursor-pointer'
            />
            <div className="md:hidden lg:hidden xl:hidden">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger>
                    <div>
                    {/* <Button variant="soft" className="bg-white"> */}
                    <button> <img src="https://cdn-icons-png.flaticon.com/512/9045/9045146.png" title="Drop Down"
                      className="w-5 h-5 select-none cursor-pointer"
                      />       
                    </button>
                    </div>

                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content>
                    <DropdownMenu.Item asChild><a href="#home" className='text-xl tracking-widest hover:text-blue-500 transition ease-linear hover:border-b border-b-blue-500 text-center'>Home</a></DropdownMenu.Item>
                    <DropdownMenu.Item asChild><a href="#technicalSkills" className='text-xl tracking-widest hover:text-blue-500 transition ease-linear hover:border-b border-b-blue-500 text-center'>Technical Skills</a></DropdownMenu.Item>
                    <DropdownMenu.Item asChild><a href="#projects" className='text-xl tracking-widest hover:text-blue-500 transition ease-linear hover:border-b border-b-blue-500 text-center'>Featured Projects</a></DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
                </div>
            <div className='hidden w-full justify-end gap-5 md:flex lg:flex xl:flex'>
                <a href="#home" className='text-xl tracking-widest hover:text-blue-500 transition ease-linear hover:border-b border-b-blue-500 text-center'>Home</a>
                <a href="#technicalSkills" className='text-xl tracking-widest hover:text-blue-500 transition ease-linear hover:border-b border-b-blue-500 text-center'>Technical Skills</a>
                <a href="#projects" className='text-xl tracking-widest hover:text-blue-500 transition ease-linear hover:border-b border-b-blue-500 text-center'>Featured Projects</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar
