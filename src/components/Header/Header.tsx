import { Button, Input, Layout } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNickname } from '../../redux/reducers/user-reducer';
import { RootState } from '../../redux/redux-store';
const { Header } = Layout;

function HeaderContainer() {
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()
    const nickname = useSelector((state: RootState) => state.userInfo.nickname)
    const [tempNickname, setTempNickname] = useState(nickname)

    useEffect(
        () => {
            const nickname = window.localStorage.getItem("OnGameNickname")
            dispatch(setNickname(nickname ? nickname : "Anonymous"))
        }, [dispatch])

    useEffect(
        () => {
            setTempNickname(nickname)
        }, [nickname]
    )

    function submitEdit() {
        window.localStorage.setItem("OnGameNickname", tempNickname ? tempNickname : "")
        dispatch(setNickname(tempNickname ? tempNickname : "Anonymous"))
        setEditMode(false)
    }

    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <div className='flex flex-row justify-between'>
                <div className='ml-5'>
                    <span className='text-white font-sans font-bold text-2xl'>OnlineMiniGames</span>
                </div>
                <div className='self-center mr-5'>
                    {editMode ? <Input.Group compact size='default'>
                        <Input style={{ width: 'calc(100% - 120px)' }} value={tempNickname ? tempNickname : ""} onKeyPress={(e)=>(e.key == "Enter"?submitEdit():null)} onChange={(e) => setTempNickname(e.target.value)} />
                        <Button type="primary" onClick={submitEdit}>Подтвердить</Button>
                    </Input.Group> :
                        <span onClick={() => (setEditMode(true))} className='text-white font-sans text-2xl cursor-pointer'>{nickname}</span>}
                </div>
            </div>
        </Header >
    )
}

export default HeaderContainer;