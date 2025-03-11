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
  { name: 'Resume', stars: 135, type: 'Language Model' },
  { name: 'Medical Record', stars: 74, type: 'Language Model' },
  { name: 'College Transcripts', stars: 4, type: 'Language Model' }
]

// AI Tools data
const aiTools = [
  {
    name: 'Verify Identity',
    description: 'Enable access to view your sovereign data.',
    url: '/connect-wallet',
    logoUrl: 'https://pbs.twimg.com/profile_images/1895186503443316736/EaIM9RTY_400x400.jpg'
  },
  {
    name: 'Authorize Access',
    description: 'Give Permission to modify your sovereign data.',
    url: 'http://localhost:3001/login',
    logoUrl: 'https://static.vecteezy.com/system/resources/previews/000/331/973/non_2x/vector-user-authentication-filled-icon.jpg'
  },
  {
    name: 'Manage your Identities',
    description: 'View and manage your sovereign identity data.',
    url: 'http://localhost:3001/did-manager',
    logoUrl: 'https://identity.foundation/images/logos/spruce.png'
  }
]

const popularRPA = [
  { name: 'Physical Address', downloads: 1, type: 'RPA' },
  { name: 'Credit Score Change', downloads: 1, type: 'RPA' },
  { name: 'New Employer', downloads: 1, type: 'RPA' }
]

const tutorials = [
  { title: 'Controllers', level: 'PDF', duration: '15 min' },
  { title: 'Public Keys', level: 'Blog', duration: '5 min' },
  { title: 'Multi-part Verification Methods', level: 'SocialFi', duration: '20 min' }
]

const deploymentGuides = [
  { title: 'Adding Services', level: 'Advanced', duration: '10 min' },
  { title: 'Types of Services', level: 'Intermediate', duration: '5 min' },
  { title: 'What are endpoints', level: 'Intermediate', duration: '15 min' },
  { title: 'Multi-part Services', level: 'Advanced', duration: '30 min' }
]

const marketplaceItems = [
  { name: 'Medical Patient Identity (Hl7 standard)', price: '1 $THEO /mo', type: 'Template' },
  { name: 'Wyoming MV-300A (01/18) ', price: '1 $THEO', type: 'Wyoming DMV' },
  { name: 'Wyoming FSDL—705 (JUL 1, 2020) ', price: '1 $THEO', type: 'Wyoming DMV' }
]

// Hero image URL - using a placeholder image from Unsplash
const heroImageUrl = 'decentralized-Id-hero-image.PNG'

const DidManager: React.FC = () => {
  // State for collapsible sections
  const [tutorialsExpanded, setTutorialsExpanded] = React.useState(false)
  const [guidesExpanded, setGuidesExpanded] = React.useState(false)
  const [dashboardExpanded, setDashboardExpanded] = React.useState(false)
  const [toolsExpanded, setToolsExpanded] = React.useState(false)
  const [llmsExpanded, setLlmsExpanded] = React.useState(true)
  const [rpaExpanded, setRpaExpanded] = React.useState(false)
  const [marketplaceExpanded, setMarketplaceExpanded] = React.useState(true)
  
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
  const openDiDAuthenticate = () => {
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
                        <p className="text-sm text-muted-foreground">{llm.stars} stars</p>
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
              <h2 className="text-2xl font-semibold text-white">Authentication & Authorization</h2>
              <p className="text-muted-foreground mt-2">Note: Connecting your wallet only establishes a authentication that you are who you claim. You must also sign a message to authorize access to your credentials and perform actions on your identity, credentials, or perform consent actions.
              <table className="text-white text-sm">
                <tr>
                  <td>
                  <ul>
                    <li>- Secure credential storage </li>
                    <li>- Credential categorization and search</li>
                    <li>- Import/export Credentials</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</li>
                    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</li>
                    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</li>
                    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</li>
                  </ul>
                  </td>
                  <td>
                    <ul>
                    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- Secure credential storage </li>
                    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- Credential categorization and search</li>
                    <li>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- Import/export Credentials</li>
                  </ul>
                  </td>
                </tr>
              </table>
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
            Manage Your Identity with Autheo
          </h1>
          <p className="text-sm text-muted-foreground mb-3">
          Cutting-edge decentralized identity framework that puts you in control of your digital presence while enabling seamless authentication across services.
              </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={openDiDAuthenticate}
              className="glass-button py-3 px-6 flex items-center justify-center group"
            >
              Authenticate & Authorize
              <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content - Three Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Search & Discovery */}
        <div className="space-y-6">
          <div className="glass-card p-6 min-h-[450px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Search & Discovery</h2>
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
                    <h3 className="text-md font-medium text-white">Recent Transactions</h3>
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
                          <p className="text-sm text-muted-foreground">{llm.stars} inquiries</p>
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
                <button
                  className="w-full flex items-center justify-between mb-3"
                  onClick={() => setRpaExpanded(!rpaExpanded)}
                >
                  <div className="flex items-center">
                    <Bot className="w-4 h-4 text-primary/60 mr-2" />
                    <h3 className="text-md font-medium text-white">Recent Modifications</h3>
                  </div>
                  {rpaExpanded ? (
                    <ChevronUp className="w-4 h-4 text-primary/60" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-primary/60" />
                  )}
                </button>
                
                {rpaExpanded && (
                  <div className="space-y-3">
                    {popularRPA.map((rpa, index) => (
                      <div key={index} className="activity-item group">
                        <FileCode className="w-4 h-4 text-primary/60" />
                        <div className="flex-1">
                          <p className="font-medium text-white">{rpa.name}</p>
                          <p className="text-sm text-muted-foreground">{rpa.downloads} modifications</p>
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
        </div>
        
        {/* Center Column: Build & Deploy */}
        <div className="space-y-6">
          <div className="glass-card p-6 min-h-[450px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Create New Identities</h2>
              <Code className="w-5 h-5 text-primary/60" />
            </div>
            
            {/* Build Tools & Integrations */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Wrench className="w-4 h-4 text-primary/60 mr-2" />
                <h3 className="text-md font-medium text-white">Basic Information</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="glass-button py-2 px-3 text-sm flex items-center justify-center">
                  <span className="text-white">Controller</span>
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
                  <h3 className="text-md font-medium text-white">Verification Methods</h3>
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
              <button
                className="w-full flex items-center justify-between mb-3"
                onClick={() => setGuidesExpanded(!guidesExpanded)}
              >
                <div className="flex items-center">
                  <Server className="w-4 h-4 text-primary/60 mr-2" />
                  <h3 className="text-md font-medium text-white">Services</h3>
                </div>
                {guidesExpanded ? (
                  <ChevronUp className="w-4 h-4 text-primary/60" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-primary/60" />
                )}
              </button>
              
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
            
            {/* Tools - Collapsible */}
        </div>
        </div>
        
        {/* Right Column: Buy & Manage */}
        <div className="space-y-6">
          <div className="glass-card p-6 min-h-[450px] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Buy & Manage</h2>
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
                Purchase Identity Templates or additional plugins for Decentralized Identity Management Tools.
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
                          
          </div>
        </div>
      </div>
      
      {/* Footer Navigation */}
      <div className="glass-card p-6 mt-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link to="/did/docs" className="text-white hover:text-primary transition-colors">
            Documentation
          </Link>
          <Link to="http://localhost:8085/autheo/channels/did" className="text-white hover:text-primary transition-colors">
            Community Forum
          </Link>
          <Link to="/did/governance" className="text-white hover:text-primary transition-colors">
            Governance Proposals
          </Link>
          <Link to="/did/support" className="text-white hover:text-primary transition-colors">
            Support
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DidManager