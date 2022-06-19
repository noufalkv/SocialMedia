import { Modal, useMantineTheme } from '@mantine/core';
import '../../pages/Auth/Auth.css'
function ProfileModal({modalOpened, setModalOpaned}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      opened = {modalOpened}
      size='55%'
      onClose = {()=> setModalOpaned(false)}
    >
     <form action="" className="infoForm">
         <h3>Your Profile</h3>
         <div>
             <input type="text" name="FirstName" placeholder='First Name' className="infoInput" />
             <input type="text" name="LastName" placeholder='Last Name' className="infoInput" />
         </div>

         <div>
             <input type="text" name="worksat" placeholder='Works at' className="infoInput" />
              
         </div>
         <div>
             <input type="text" name="livesIn" placeholder='Lives In' className="infoInput" />
             <input type="text" name="Counytry" placeholder='Country' className="infoInput" />
         </div>
         <div>
             <input type="text"   placeholder='Relationship Status' className="infoInput" />
              
         </div>
         <div>
             Profile Image
             <input type="file" name='profileImg' />
             Cover Image
             <input type="file" name='profileImg' />
         </div>
         <button className='button infoButton'> Update</button>
     </form>
    </Modal>
  );
}
export default ProfileModal;