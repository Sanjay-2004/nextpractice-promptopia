import '@styles/globals.css'
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata = {
    title: 'Promptopia',
    description: "Discover and share AI Prompts"
};

export default function Layout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient">
                        </div>
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>

        </html>
    )
}
