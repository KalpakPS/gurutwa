import './Loading.css'

const Loading = ({isLoading}) => {
    
    if (isLoading) {
        return (
            <div className='loading-page'>
                <div className='spinner'>
                    <h1>Loading Page</h1>
                </div>
            </div>
        )
    }
   
}

export default Loading