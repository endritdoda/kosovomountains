import React from 'react'
import Mali1 from '../components/Mali-1'
import majafoto from '../photos/majazezfaqe.jpg'
import Gjeravica from './Gjeravica'


const Maja = () => {
  return (
    <div>
        <Mali1
         emri="Maja Zezë"
         info="Maja e Zezë është një mal në Kosovë. Maja e Zezë është pjesë e Bjeshkëve të Sharrit dhe është 2,585 metra e lartë. maja e Zezë gjindët afër Kobilicës që është më e vogël se Maja e Zezë."
         foto={majafoto}
         infoo="Lexo me shume per Gjeravicen."
         butoni="Gjeravica"
         click={<Gjeravica/>}
        />
        {/* <Mali2/> */}
    </div>
  )
}

export default Maja