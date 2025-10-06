export default function TestPage() {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '30px' }}>Test Page</h1>
      
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
        <h2>Components Check:</h2>
        <ul>
          <li>Hero - Should show turquoise gradient background</li>
          <li>LogoSlider - Should show scrolling logos</li>
          <li>DigitalSolution - Should show 2x2 grid</li>
          <li>Services - Should show services list</li>
          <li>All other components...</li>
        </ul>
      </div>

      <div style={{ backgroundColor: '#3AA6B9', color: 'white', padding: '20px', borderRadius: '10px' }}>
        <p>If you can see this, the app is working!</p>
      </div>
    </div>
  )
}