import './App.css';
import './index.css';
import './default.css';
import logo from './img/logo.png'
import search from './img/search.svg'
import research from './img/research.svg'
import board from './img/board.svg'
import clock from './img/clock.svg'
import drawing from './img/drawing.svg'
import globe from './img/globe.svg'
import excelReader from './img/excelReader.svg'
import {useEffect, useState} from "react";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import {News} from "./Components/News/News";

import {Main} from "./Pages/Main/Main";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {RoutesPage} from "./Pages/RoutesPage/RoutesPage";
import {Documentation} from "./Pages/Documentation/Documentation";

function App() {
    const [news, setNews] = useState([
        {
            title: 'Excel Reader',
            description: `Этот узел \n читает файлы Excel (форматы xlsx, xlsm, xlsb и xls). Он может читать один или несколько файлов одновременно, но только один лист в файле. Поддерживаемые типы Excel, которые можно прочитать, это строка, число, логическое значение, дата и время, но не картинки, диаграммы и т.д.
                          Данные считываются и преобразуются в типы KNIME: строка, целое число, длинное число, число с плавающей точкой, логическое значение, локальная дата, локальное время и локальная дата и время. При выполнении узел сканирует входной файл, чтобы определить количество и типы столбцов и выводит таблицу с автоматически определенной структурой и типами KNIME.
                          Формулы также могут быть прочитаны и пересчитаны при необходимости. Производительность этого узла ограничена (из-за основной библиотеки проекта Apache POI). Чтение больших файлов занимает много времени и памяти (особенно файлов в формате xlsx при включенном пересчете формул).
                          Диалог этого узла показывает предварительный просмотр и содержимое файла. В то время как предварительный просмотр показывает таблицу, которая будет считана с применением настроек и обновляется при изменении любой настройки, содержимое файла показывает содержимое файла так, как оно отображается в Excel. Это позволяет легче находить номера строк и названия столбцов для указания разных настроек.`,
            img: excelReader,
            link: 'https://hub.knime.com/knime/extensions/org.knime.features.ext.poi/latest/org.knime.ext.poi3.node.io.filehandling.excel.reader.ExcelTableReaderNodeFactory',
            id: 0,
        },
        {
            title: 'News 2 Example',
            description: `Something in News 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque exercitationem itaque odit perferendis, quas suscipit voluptatibus? Deserunt eaque nam, perferendis Lorem ipsum dolor sit amet, consectetur adipisicing elit. A arch Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. itecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. saepe sit voluptas? Aliquam asperiores aspernatur, corporis delectus deleniti dicta dolore exercitationem necessitatibus, nemo nesciunt nihil numquam reiciendis ullam! Architecto beatae cum, moles Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. tias repellat sint sunt tempora vel? Et itaque molestiae quasi recusandae sapiente? Aut doloremque eum ipsam reiciendis veritatis?`,
            img: board,
            id: 1,
        },
        {
            title: 'Weather News',
            description: `Something in News 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consequuntur corporis, cum esse est ex expedita facilis itaque magnam minima modi molestias nobis numquam, provident re Lorem ipsum dolor sit amet, conse Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. ctetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.rum saepe ullam ut!`,
            img: clock,
            id: 2,
        },
        {
            title: 'Cooking news',
            description: `Something in News Cooking news Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque exercitationem itaque odit perferendis, quas suscipit voluptatibus? Atque exercitationem itaque odit perferendis, Deserunt eaque nam, per Lorem ipsum dolo Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. r sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.ferendis saepe sit voluptas? Aliquam asperiores aspernatur, corporis delectus deleniti dicta dolore exercitationem necessitatibus, nemo nesciunt nihil numquam reiciendis ullam! Architecto b Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. eatae cum, molestias repellat sint sunt tempora vel? Et itaque molestiae quasi recusandae sapiente? Aut doloremque eum ipsam reiciendis veritatis?`,
            img: drawing,
            id: 3,
        },
        {
            title: 'Studying 1',
            description: `Something in News 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consequuntur corporis, cum esse est ex expedita facilis itaque magnam minima modi molestias nobis numquam, provident rerum saepe Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.   Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.ullam ut!`,
            img: globe,
            id: 4,
        },
        {
            title: 'News 6 Example',
            description: `Something in News 6 ipsum dolor sit amet, consectetur adipisicing elit. Atque exercitationem itaque odit perferendis, quas suscipit voluptatibus? Deserunt eaque nam, perferendis saepe sit voluptas? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.  Aliquam asperiores aspernatur, corpor Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.is delectus deleniti dicta dolore exercitationem necessitatibus, nemo nesciunt nihil numquam reiciendis ullam! Architecto beatae cum, molestias repellat Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.  sint sunt tempora vel? Et itaque molestiae quasi recusandae sapiente? Aut doloremque eum ipsam reiciendis veritatis?`,
            img: excelReader,
            id: 5,
        },
        {
            title: 'Studying 2',
            description: `Something in News 7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consequuntur corporis, cum esse est ex expedita facilis itaque magnam minima modi molestias nobis numquam,  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. provident rerum saep Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.e ullam ut!`,
            img: research,
            id: 6,
        },
        {
            title: 'News 8 Example',
            description: `Something in News 8 ipsum dolor sit amet, consectetur adipisicing elit. Atque exercitationem itaque odit perferendis, quas suscipit voluptatibus? Deserunt eaque nam, perferendis saepe sit voluptas? Aliquam asperiores aspernatur, corporis delectus deleniti Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.  dicta dolore exercitationem Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. necessitatibus, nemo nesciunt nihil numquam reiciendis ullam! Architecto beatae cum, molestias repellat sint sunt tempora vel? Et itaque molestiae quasi recusandae sapiente? Aut doloremque  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. eum ipsam reiciendis veritatis?`,
            img: clock,
            id: 7,
        },
        {
            title: 'Studying 11',
            description: `Something in News 9 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consequuntur corporis, cum esse est ex expedita facilis itaque magnam minima modi molestias nobis numquam, provident rerum saepe ull Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.  dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.am ut!`,
            img: globe,
            id: 8,
        },
        {
            title: 'News 10 Example',
            description: `Something in News 10 ipsum dolor sit amet, consectetur adipisicing elit. Atque exercitationem itaque odit perferendis, Atque exercitationem itaque odit perferendis, Atque exercitationem itaque odit perferendis, quas suscipit voluptatibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.  Deserunt eaque nam, perferendis saepe sit voluptas? Aliquam Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. asperiores aspernatur, corporis delectus deleniti dicta dolore exercitationem necessitatibus, nemo nesciunt nihil numquam reiciendis ullam! Architecto beatae cum, molestias repellat sint sunt Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.  tempora vel? Et itaque molestiae quasi recusandae sapiente? Aut doloremque eum ipsam reiciendis veritatis?`,
            img: research,
            id: 9,
        },
        {
            title: 'News 11 Example',
            description: `Something in News 11 Lorem ipsum dolor sit amet, consectetur adipisicing elit.Deserunt eaque nam, perferendis saepe sit voluptas? Aliquam asperiores Deserunt eaque nam, perferendis saepe sit voluptas? Aliquam asperiores Deserunt eaque nam, Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.  perferendis saepe sit voluptas? Aliquam asperiores Accusantium Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. animi consequuntur corporis, cum esse est ex expedita facilis itaque magnam minima modi molestias nobis numquam, provident rerum saepe Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.  ullam ut!`,
            img: research,
            id: 10,
        },
        {
            title: 'News 12 Example',
            description: `Something in News 12 ipsum dolor sit amet, consectetur adipisicing elit. Atque exercitationem itaque odit perferendis, quas suscipit voluptatibus? Deserunt eaque nam, perferendis saepe sit voluptas? Aliquam asperiores Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis.  aspernatur, corporis delectus deleniti dicta dolore exercitationem necessitatibus, Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. nemo nesciunt nihil numquam reiciendis ullam! Architecto beatae cum, molestias repellat sint sunt tempora vel? Et itaque molestiae quasi recusandae sapiente? Aut doloremque  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto aspernatur deserunt
                            dolorum excepturi id impedit laudantium, maiores ut. Architecto asperiores, aspernatur error
                            excepturi magni minus odit porro quis voluptates!
                        Aspernatur aut eos eveniet iste itaque officia totam vitae? Accusamus architecto cum dicta
                            dolore ducimus et harum impedit inventore ipsa necessitatibus, nulla omnis perferendis
                            placeat quas, qui reiciendis sapiente veritatis. eum ipsam reiciendis veritatis?`,
            img: drawing,
            id: 11,
        },
    ])
    const [searchValue, setSearchValue] = useState('')
    const [filteredValue, setFilteredValue] = useState('')
    const navigate = useNavigate()
    var maxLength = 200;

    const trimText = (text) => {
        return text.substring(0, 200) + '...';
    }

    const countHowMuchElements = () => {
        let temp = news.filter((item,index) => {
            return searchValue.toLowerCase() === '' ? item : item.title.toLowerCase().includes(searchValue)
        })
        setFilteredValue(temp)
    }

    useEffect(() => {
        countHowMuchElements()
    },[searchValue])

    return (
        <div className="App">
            <Header setSearchValue={setSearchValue} searchValue={searchValue}/>
            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/routes'} element={<RoutesPage setSearchValue={setSearchValue} trimText={trimText} searchValue={searchValue} news={news} filteredValue={filteredValue}/>}/>
                <Route path={'/routes/news/:id'} element={<News searchValue={searchValue} setSearchValue={setSearchValue} navigate={navigate} news={news}/>}/>
                <Route path={'/documentation'} element={<Documentation/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
