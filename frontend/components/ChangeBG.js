import styles from './ChangeBG.module.css'

function Home(){
    return (
        <div className={styles.box_container}>
            <div className={styles.box}>
                <input type="text" name="color" id="input-color" className='form-control'></input>
                <button type="button" className="btn btn-primary">Send TX</button>
            </div>
        </div>
    )
}

export default Home