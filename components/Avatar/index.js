import styles from './styles.module.css'

const Avatar = ({ author, photoURL }) => {
    return <>
        <div className={styles.user}>
            <img alt={author} src={photoURL} />
            <img src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/test-2e6dd40439e72f09a8193e27cb3e0c51.svg' width='24' />
        </div>
    </>
}

export default Avatar