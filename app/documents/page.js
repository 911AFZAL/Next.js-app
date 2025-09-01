import Sidebar from "../dashboard/components/Sidebar"
import Header from "../dashboard/components/Header"

function page() {
  return (
     <div className="flex">
          {/* Sidebar */}
          <Sidebar />
    
          {/* Main Content */}
          <div className="ml-64 flex-1 min-h-screen bg-gray-100">
            <Header />
    
            <main className="p-6">
              {/* === Top Header with Filter === */}
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Documents</h1>
                <div>
                  
                </div>
              </div>
            </main>
          </div>
        </div>
  )
}

export default page