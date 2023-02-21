import { useState } from 'react'
import './App.css'
import { districtList } from "./constant"

function App() {
  const [district, setDistrict] = useState("")

  function handleSelectDistrict(district) {
    console.log(district.target.value, "test")
  }

  return (
    <div className="App">
      <p className="font-bold text-[28px] text-[#ffffff] mb-4">สถิติประชากรกรุงเทพฯ พ.ศ. 2550 - 2559</p>
      <p className="text-[18px] font-bold text-[#ffffff] mb-2">ลักษณะพื้นที่</p>
      <div className="text-[14px] text-[#ffffff] mb-12">
        กรุงเทพฯ เป็นจังหวัดที่มีประชากรมากที่สุดในประเทศไทย หากรวมประชากรแฝงที่ไม่ปรากฏในทะเบียนและคนที่ เดินทางมาทำงานในตอนกลางวันด้วยแล้ว คาดว่าจะสูงถึงเกือบเท่าตัวของประชากรที่ปรากฏในทะเบียน เราจึง เรียกกรุงเทพฯ ว่าเป็น
        <a href="https://en.wikipedia.org/wiki/Megacity" target='_blank'>“อภิมหานคร (megacity)”</a>
      คือมีประชากรตั้งแต่ 10 ล้านคนขึ้นไป
        <br/>
        <br/>
        อัตราเพิ่มของประชากรกรุงเทพฯ อยู่ระดับเกือบ 1% และเริ่มลดลงในปี 2559 ดังแสดงในแผนภูมิต่อไปนี้
      </div>

      <p className="font-bold text-[18px] text-[#ffffff] mb-2">การเติบโต</p>
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-[14px] text-[#ffffff] mr-4">เขต</p>
          <select onChange={e => setDistrict(e.target.value)}>
            {districtList.map((item, idx) => <option ley={idx}>{item.name}</option>)}
          </select>
        </div>

        <div className="flex">
          <p className="text-[14px] text-[#ffffff] mr-4">ตั้งแต่</p>
          <select onChange={handleSelectDistrict}>
            <option>test1</option>
            <option>test2</option>
            <option>test3</option>
          </select>
          <p className="text-[14px] text-[#ffffff] mx-4">ถึง</p>
          <select onChange={handleSelectDistrict}>
            <option>test1</option>
            <option>test2</option>
            <option>test3</option>
          </select>
        </div>
      </div>

      <p className="font-bold text-[18px] text-[#ffffff] mt-4">แหล่งข้อมูล</p>
      <ul className="list-disc ml-7">
        <li>
          <a href="https://stat.bora.dopa.go.th/stat/statnew/statMONTH/statmonth/" target='_blank'>
            สำนักบริหารการทะเบียน กรมการปกครอง กระทรวงมหาดไทย, จำนวนประชากร, สำนักบริหารการทะเบียน กรมการปกครอง กระทรวงมหาดไทย, Editor. 2564: กรุงเทพฯ.
          </a>
        </li>
        <li>
          <a href="http://www.nso.go.th/" target='_blank'>
            สำนักงานสถิติแห่งชาติ, การสำรวจภาวะเศรษฐกิจและสังคมของครัวเรือน พ.ศ. 2563 สำนักงานสถิติแห่งชาติ, Editor. 2563: กรุงเทพฯ.
          </a>
        </li>
        <li>
          <a href="http://www.price.moc.go.th/" target='_blank'>
            สำนักดัชนีเศรษฐกิจการค้า กระทรวงพาณิชย์, ข้อมูลดัชนีราคาผู้บริโภคทั่วไป, สำนักดัชนีเศรษฐกิจการค้า กระทรวงพาณิชย์, Editor. 2563: กรุงเทพฯ.
          </a>
        </li>
      </ul>
    </div>
  )
}

export default App
