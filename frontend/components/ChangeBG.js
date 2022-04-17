import getContract from '../utils/getContact';
import styles from './ChangeBG.module.css'

function Home(props){

    async function changeColor(e){
        e.preventDefault();
        let new_color = e.target.color.value;
        const contract = await getContract(true);
        const tx = await contract.setColor(new_color);
        await tx.wait();
        new_color = await contract.color();
        props.setBgColor(new_color);
    }

    return (
        <div className={styles.box_container}>
            <form className={styles.box} onSubmit={e => changeColor(e)}>
                <input type="text" name="color" id="input-color" className='form-control' defaultValue={props.bgColor}></input>
                <button type="submit" className="btn btn-primary">Send TX</button>
            </form>
        </div>
    )
}

export default Home