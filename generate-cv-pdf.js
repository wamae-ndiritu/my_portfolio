import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generatePDF() {
  try {
    console.log('Starting PDF generation...');
    
    // Launch browser
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Path to HTML file
    const htmlPath = path.join(__dirname, 'public/docs/Wamae-Ndiritu-CV-2025.html');
    const outputPath = path.join(__dirname, 'public/docs/Wamae-Ndiritu-CV-2025.pdf');
    
    // Check if HTML file exists
    if (!fs.existsSync(htmlPath)) {
      throw new Error(`HTML file not found: ${htmlPath}`);
    }
    
    // Load HTML file
    await page.goto(`file://${htmlPath}`, { 
      waitUntil: 'networkidle0' 
    });
    
    // Generate PDF
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        bottom: '20px',
        left: '20px',
        right: '20px'
      }
    });
    
    await browser.close();
    
    console.log(`✅ PDF generated successfully: ${outputPath}`);
    console.log('📄 Your updated CV is ready!');
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error.message);
    process.exit(1);
  }
}

// Run the function
generatePDF();
