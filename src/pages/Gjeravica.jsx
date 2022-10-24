import React from 'react'
import Mali1 from '../components/Mali-1'
import gjergj from '../photos/Gjeravicafaqe.jpg'
import Maja from '../pages/Maja'

const Gjeravica = () => {
  return (
    <div>
         <Mali1 
         emri="Gjeravica"
         info="Gjeravica me 2.656 m lartësi mbidetare është maja më e lartë në Alpet Shqiptare (Bjeshkët e Nemuna)në pjesën e Kosovës, edhe pse lartësia e vërtetë mund të jetë për disa metra më e madhe, ende e pakonfirmuar nga GPS. Radhitet si maja e tretë pas majës së malit Korab dhe Jezercit i cili gjendet në Alpet Shqiptare dhe ka lartësinë 2764 metra."
         foto={gjergj}
         infoo="Lexo me shume per Majen e Zeze."
         butoni="Maja e zez"
         click={<Maja/>}
         />
         
    </div>
  )
}

export default Gjeravica