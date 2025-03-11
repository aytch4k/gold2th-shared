import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  Activity,
  Users,
  GitBranch,
  Search,
  Filter,
  Star,
  Code,
  BookOpen,
  Server,
  Wrench,
  ShoppingCart,
  BarChart3,
  Bell,
  FileCode,
  Bot,
  Cpu,
  Layers,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink
} from 'lucide-react'

// Mock data for AI page
const featuredLLMs = [
  { name: '**Storage Layer** - IPFS for decentralized, encrypted storage of vault data - Geo-fenced nodes for regional data sovereignty'},
  { name: '**Transport Layer** - libp2p for peer-to-peer communication - Lattice-based encryption for post-quantum security - Region-specific peer discovery and routing'},
]

// AI Tools data
const aiTools = [
  {
    name: 'Flowise',
    description: 'Low-code LLM app builder with visual workflow editor',
    url: 'http://localhost:13000',
    logoUrl: 'https://remarkable-smakager-ddb2b7.netlify.app/opengraph-image.png?2eca201df198027c'
  },
  {
    name: 'n8n',
    description: 'Workflow automation platform for connecting various services',
    url: 'http://localhost:8083',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/53/N8n-logo-new.svg'
  }
]

const popularRPA = [
  { name: 'Data Extraction Workflow', downloads: 324, type: 'RPA' },
  { name: 'Document Processing', downloads: 256, type: 'RPA' }
]

const tutorials = [
  { title: 'Private keys never leave the user\'s wallet', level: '', duration: '' },
  { title: 'All credential data is encrypted using homomorphic encryption', level: '', duration: '' },
  { title: 'Zero-knowledge proofs are used for credential verification', level: '', duration: '' },
  { title: 'Differential privacy techniques are applied to sensitive data', level: '', duration: '' },
  { title: 'Geo-fenced storage ensures data sovereignty compliance', level: '', duration: '' },
  { title: 'Secure point-to-point tunnel for post-quantum security', level: '', duration: '' },
  { title: 'End-to-end encrypted communication between wallet and middleware', level: '', duration: '' }
]

const deploymentGuides = [
  { title: 'Deploy LLMs on DePAIN Meshes', level: 'Advanced', duration: '50 min' },
  { title: 'Run RPA Workflows Across Nodes', level: 'Intermediate', duration: '40 min' }
]

const marketplaceItems = [
  { name: 'Secure DeEndpoint Shield Defender', price: '$50/license', type: 'Endpoint' },
  { name: 'Quantum DeMesh Network Analyzer', price: '$50/license', type: 'Network' }
]

const marketplaceItems2 = [
  { name: 'PQC DeVPN Tunnel', price: '$50/license', type: 'Transport' },
  { name: 'QRC Messenger', price: '$50/license', type: 'Communications' },
  { name: 'QRF Grid Extender', price: '500 DPT/month', type: 'Grid-Down' }
]


// Hero image URL - using a placeholder image from Unsplash
const heroImageUrl = 'ai-hero-image.PNG'

const Security: React.FC = () => {
  // State for collapsible sections
  const [tutorialsExpanded, setTutorialsExpanded] = React.useState(false)
  const [guidesExpanded, setGuidesExpanded] = React.useState(false)
  const [dashboardExpanded, setDashboardExpanded] = React.useState(false)
  const [toolsExpanded, setToolsExpanded] = React.useState(true)
  const [llmsExpanded, setLlmsExpanded] = React.useState(true)
  const [rpaExpanded, setRpaExpanded] = React.useState(false)
  const [marketplaceExpanded, setMarketplaceExpanded] = React.useState(true)
  const [marketplace2Expanded, setMarketplace2Expanded] = React.useState(false)
  
  // State for search modal
  const [searchQuery, setSearchQuery] = React.useState('')
  const [searchModalOpen, setSearchModalOpen] = React.useState(false)
  
  // State for AI tools modal
  const [aiToolsModalOpen, setAiToolsModalOpen] = React.useState(false)
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    if (e.target.value.length > 0 && !searchModalOpen) {
      setSearchModalOpen(true)
    } else if (e.target.value.length === 0 && searchModalOpen) {
      setSearchModalOpen(false)
    }
  }
  
  // Close search modal
  const closeSearchModal = () => {
    setSearchModalOpen(false)
  }
  
  // Open AI tools modal
  const openAiToolsModal = () => {
    setAiToolsModalOpen(true)
  }
  
  // Close AI tools modal
  const closeAiToolsModal = () => {
    setAiToolsModalOpen(false)
  }

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div className="glass-card w-full max-w-4xl p-6 relative">
            <button
              onClick={closeSearchModal}
              className="absolute top-4 right-4 text-white hover:text-primary"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search LLMs, RPA scripts, or DePAIN nodes"
                  className="w-full bg-background/30 border border-border/50 rounded-md py-3 px-4 text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  autoFocus
                />
                <Search className="absolute right-3 top-3.5 w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Top Results</h3>
                <div className="space-y-3">
                  {featuredLLMs.map((llm, index) => (
                    <div key={index} className="activity-item group">
                      <Cpu className="w-4 h-4 text-primary/60" />
                      <div className="flex-1">
                        <p className="font-medium text-white">{llm.name}</p>
                        <p className="text-sm text-muted-foreground">{llm.stars} </p>
                      </div>
                      <Link
                        to="#"
                        className="text-primary hover:text-primary/80 transform transition-transform group-hover:translate-x-1"
                      >
                        →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="glass-button py-2 px-3 text-sm flex items-center justify-center">
                    <span className="text-white">Language Models</span>
                  </div>
                  <div className="glass-button py-2 px-3 text-sm flex items-center justify-center">
                    <span className="text-white">RPA Workflows</span>
                  </div>
                  <div className="glass-button py-2 px-3 text-sm flex items-center justify-center">
                    <span className="text-white">Tutorials</span>
                  </div>
                  <div className="glass-button py-2 px-3 text-sm flex items-center justify-center">
                    <span className="text-white">Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Tools Modal */}
      {aiToolsModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
          <div className="glass-card w-full max-w-4xl p-6 relative">
            <button
              onClick={closeAiToolsModal}
              className="absolute top-4 right-4 text-white hover:text-primary"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-white">AI Tools</h2>
              <p className="text-muted-foreground mt-2">
                Connect to these powerful AI tools to enhance your workflow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiTools.map((tool, index) => (
                <div key={index} className="glass-card p-4 border border-border/30 hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-background/30 flex items-center justify-center">
                      <img
                        src={tool.logoUrl}
                        alt={`${tool.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white">{tool.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {tool.description}
                  </p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button py-2 px-4 flex items-center justify-center group text-sm"
                  >
                    Open {tool.name}
                    <ExternalLink className="ml-2 w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Image */}
      <div className="glass-card p-0 mb-8 relative overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${heroImageUrl})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-30"></div>
        
        <div className="relative z-10 p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Secure Your Autheo Endpoints and Tools
          </h1>
          <p className="text-sm text-muted-foreground mb-3">
          Leverage state of the art security protection leveraging smart wallets, industry leading cryptographic libraries, point-to-point threat protection, 
          and post-quantum readiness according to NIST PQC standards. Leveraging a purely decentralized infrastructure, securely encrypt p2p messages and traffic 
          via one of the many tiers of encryption already integrated with our decentralized identity management system. 
              </p>
        </div>
      </div>

      {/* Main Content - Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Search & Discovery */}
        <div className="space-y-6">
          <div className="glass-card p-6 min-h-[450px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Endpoint Protection</h2>
              <Search className="w-5 h-5 text-primary/60" />
            </div>
            
            {/* Featured Items - Collapsible */}
            <div>
              {/* Top LLMs - Collapsible */}
              <div className="mb-4">
                <button
                  className="w-full flex items-center justify-between mb-3"
                  onClick={() => setLlmsExpanded(!llmsExpanded)}
                >
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-primary/60 mr-2" />
                    <h3 className="text-md font-medium text-white">Security Layers</h3>
                  </div>
                  {llmsExpanded ? (
                    <ChevronUp className="w-4 h-4 text-primary/60" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-primary/60" />
                  )}
                </button>
                
                {llmsExpanded && (
                  <div className="space-y-3 mb-4">
                    {featuredLLMs.map((llm, index) => (
                      <div key={index} className="activity-item group">
                        <Cpu className="w-4 h-4 text-primary/60" />
                        <div className="flex-1">
                          <p className="font-medium text-white">{llm.name}</p>
                          <p className="text-sm text-muted-foreground">{llm.stars} </p>
                        </div>
                        <Link
                          to="#"
                          className="text-primary hover:text-primary/80 transform transition-transform group-hover:translate-x-1"
                        >
                          →
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* RPA Workflows - Collapsible */}
              <div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Center Column: Build & Deploy */}
        <div className="space-y-6">
          <div className="glass-card p-6 min-h-[450px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Decentralized Security Models</h2>
              <Code className="w-5 h-5 text-primary/60" />
            </div>
            
            {/* Build Tools & Integrations */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Wrench className="w-4 h-4 text-primary/60 mr-2" />
                <h3 className="text-md font-medium text-white">Security and Encryption Protocols</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="glass-button py-2 px-3 text-sm flex items-center justify-center">
                  <span className="text-white">Zero-Knowledge Proofs</span>
                </div>
                <div className="glass-button py-2 px-3 text-sm flex items-center justify-center">
                  <span className="text-white">Homomorphic Encryption</span>
                </div>
                <div className="glass-button py-2 px-3 text-sm flex items-center justify-center">
                  <span className="text-white">Differential Privacy</span>
                </div>
                <div className="glass-button py-2 px-3 text-sm flex items-center justify-center">
                  <span className="text-white">Data Compression</span>
                </div>
                <div className="glass-button py-2 px-3 text-sm flex items-center justify-center">
                  <span className="text-white">Lattice-Based Encryption</span>
                </div>

              </div>
            </div>
            {/* Tutorials - Collapsible */}
            <div className="mb-6">
              <button
                className="w-full flex items-center justify-between mb-3"
                onClick={() => setTutorialsExpanded(!tutorialsExpanded)}
              >
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 text-primary/60 mr-2" />
                  <h3 className="text-md font-medium text-white">Advanced Security Features</h3>
                </div>
                {tutorialsExpanded ? (
                  <ChevronUp className="w-4 h-4 text-primary/60" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-primary/60" />
                )}
              </button>
              
              {tutorialsExpanded && (
                <div className="space-y-3 mb-4">
                  {tutorials.map((tutorial, index) => (
                    <div key={index} className="activity-item group">
                      <BookOpen className="w-4 h-4 text-primary/60" />
                      <div className="flex-1">
                        <p className="font-medium text-white">{tutorial.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {tutorial.level} • {tutorial.duration}
                        </p>
                      </div>
                      <Link
                        to="#"
                        className="text-primary hover:text-primary/80 transform transition-transform group-hover:translate-x-1"
                      >
                        →
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Deployment Guides - Collapsible */}
            <div className="mb-6">
               
              {guidesExpanded && (
                <div className="space-y-3 mb-4">
                  {deploymentGuides.map((guide, index) => (
                    <div key={index} className="activity-item group">
                      <Server className="w-4 h-4 text-primary/60" />
                      <div className="flex-1">
                        <p className="font-medium text-white">{guide.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {guide.level} • {guide.duration}
                        </p>
                      </div>
                      <Link
                        to="#"
                        className="text-primary hover:text-primary/80 transform transition-transform group-hover:translate-x-1"
                      >
                        →
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
          </div>
        </div>
        
        {/* Right Column: Buy & Manage */}
        <div className="space-y-6">
          <div className="glass-card p-6 min-h-[450px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Application Catalog</h2>
              <ShoppingCart className="w-5 h-5 text-primary/60" />
            </div>
            
            {/* Marketplace - Collapsible */}
            <div className="mb-6">

               <button
                className="w-full flex items-center justify-between mb-3"
                onClick={() => setMarketplaceExpanded(!marketplaceExpanded)}
              >
                <div className="flex items-center">
                  <ShoppingCart className="w-4 h-4 text-primary/60 mr-2" />
                  <h3 className="text-md font-medium text-white">Marketplace</h3>
                </div>
                {marketplaceExpanded ? (
                  <ChevronUp className="w-4 h-4 text-primary/60" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-primary/60" />
                )}
              </button>
              
              <p className="text-sm text-muted-foreground mb-3">
                Upgrade your soverign identity protection, your corporate security, and your crypto wallets.
              </p>
              
              {marketplaceExpanded && (
                <div className="space-y-4 mb-6">
                  {marketplaceItems.map((item, index) => (
                    <div key={index} className="glass-card p-4 border border-border/30">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-white font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.type}</p>
                        </div>
                        <span className="text-primary font-medium">{item.price}</span>
                      </div>
                      <button className="glass-button mt-3 w-full flex items-center justify-center group text-sm py-1.5">
                        Purchase
                        <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}

            </div>
            
            {/* Marketplace2 - Collapsible */}
            <div className="mb-6">

               <button
                className="w-full flex items-center justify-between mb-3"
                onClick={() => setMarketplace2Expanded(!marketplace2Expanded)}
              >
                <div className="flex items-center">
                  <ShoppingCart className="w-4 h-4 text-primary/60 mr-2" />
                  <h3 className="text-md font-medium text-white">Additional Solutions</h3>
                </div>
                {marketplace2Expanded ? (
                  <ChevronUp className="w-4 h-4 text-primary/60" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-primary/60" />
                )}
              </button>
              
              <p className="text-sm text-muted-foreground mb-3">
                Upgrade your soverign identity protection, your corporate security, and your crypto wallets.
              </p>
              
              {marketplace2Expanded && (
                <div className="space-y-4 mb-6">
                  {marketplaceItems2.map((item, index) => (
                    <div key={index} className="glass-card p-4 border border-border/30">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-white font-medium">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.type}</p>
                        </div>
                        <span className="text-primary font-medium">{item.price}</span>
                      </div>
                      <button className="glass-button mt-3 w-full flex items-center justify-center group text-sm py-1.5">
                        Purchase
                        <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}

            </div>

          </div>
        </div>
      </div>
      
      {/* Footer Navigation */}
      <div className="glass-card p-6 mt-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link to="/security/docs" className="text-white hover:text-primary transition-colors">
            Documentation
          </Link>
          <Link to="http://localhost:8085/autheo/channels/security" className="text-white hover:text-primary transition-colors">
            Community Forum
          </Link>
          <Link to="/security/governance" className="text-white hover:text-primary transition-colors">
            Governance Proposals
          </Link>
          <Link to="/security/support" className="text-white hover:text-primary transition-colors">
            Support
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Security