import ReactDOM from 'react-dom/client'
import { App } from './App'
import { RecoilRoot } from 'recoil'

const rootElement = document.getElementById('app')

const root = ReactDOM.createRoot(rootElement!)

root.render(
    <RecoilRoot>
        <App />
    </RecoilRoot>
)
