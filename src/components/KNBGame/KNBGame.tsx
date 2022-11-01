
import { Button } from 'antd';

function KNBGame(){

    return(
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA6wfZ7BxHpbIu_E0BHtt4z2sEz0o7vEugSj74Q94kCIIaP6PIS4Vf6g72wwyiswH7S5E&usqp=CAU'></img>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8DRhNEY6Bse7p0ylmBmrqatjJ5j3i62yaaLU7O5Wv14QEfmE9yJO-JP9N4qAQWP3XqY&usqp=CAU'></img>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxxtuCHrRgDpd2MlTL1SEh9yJbVrlkZQ8MT5Cn-YwYSLE0Xm3BhoSKrH9f5zLFMmw3VE&usqp=CAU'></img>
            <img src='https://www.kindpng.com/picc/m/119-1191405_blue-question-mark-emoji-clipart-png-download-blue.png'></img>
            <Button size='large' className='w-36' type='primary'>Камень</Button>
            <Button type='primary'>Ножницы</Button>
            <Button type='primary'>Бумага</Button>
        </div>
    )
}

export default KNBGame