import * as React from 'react'
import { Link } from 'react-router-dom'
import { Activity, Users, GitBranch, MessageCircle, Bell, Users2 } from 'lucide-react'

// Mock data - will be replaced with real data from blockchain/API
const stats = {
  repositories: {
    total: 156,
    active: 45,
    new: 12
  },
  community: {
    developers: 324,
    activeContributors: 89,
    coreMembers: 15
  },
  governance: {
    activeProposals: 8,
    pendingReviews: 3,
    participation: "95%"
  }
}

const recentActivity = [
  {
    type: 'governance',
    title: 'New Governance Proposal',
    description: 'Protocol upgrade discussion started',
    time: '2h ago',
    icon: Activity
  },
  {
    type: 'contract',
    title: 'Smart Contract Update',
    description: 'Major security patch merged',
    time: '5h ago',
    icon: GitBranch
  },
  {
    type: 'community',
    title: 'New Community Member',
    description: 'Core contributor joined',
    time: '1d ago',
    icon: Users
  }
]


const Home: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Project Statistics - All 6 cards in a responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="stats-card glow-effect">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-white">Sovereign Identity for the Digital Age</h3>
              <p className="text-3xl font-bold gradient-text">
             </p>
              <p className="text-muted-foreground">
               Cutting-edge decentralized identity framework that puts you in control of your digital presence while enabling seamless authentication across services.
              </p>
            </div>
            <GitBranch className="w-6 h-6 text-primary/60" />
          </div>
          <Link
            to="/DidManager"
            className="glass-button mt-4 w-full flex items-center justify-center group"
          >
            Manage Identity
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="stats-card glow-effect">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-white">Credential Vault</h3>
              <p className="text-3xl font-bold gradient-text">
              </p>
              <p className="text-muted-foreground mt-1">
              </p>
              <p className="text-muted-foreground">
              Securely store and manage your digital credentials with end-to-end encryption.
              <ul>
              <li/>- Create new credentials
              <li/>- Verify Credential Status
              <li/>- Export Credential for Offline 
              </ul>
              </p>

            </div>
            <Users className="w-6 h-6 text-primary/60" />
          </div>
          <Link
            to="/CredentialVault"
            className="glass-button mt-4 w-full flex items-center justify-center group"
          >
            Manage Credentials
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="stats-card glow-effect">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-white">Consent Management</h3>
              <p className="text-muted-foreground mt-1">
              </p>
              <p className="text-muted-foreground">
              Control how your data is shared and monitor access to your credentials
              <ul>
              <li/>- Approve / Reject Requests
              <li/>- View Consent History
              <li/>- Configure Sharing Preferences
              <li/>&nbsp;
              </ul>
              </p>
            </div>
            <Activity className="w-6 h-6 text-primary/60" />
          </div>
          <Link
            to="/ConsentManagement"
            className="glass-button mt-4 w-full flex items-center justify-center group"
          >
            Authorize or Revoke Access
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="stats-card glow-effect">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-white">Single Sign-On</h3>
               <p className="text-muted-foreground mt-1">
              </p>
              <p className="text-muted-foreground">
                Integrate your digital identies with enterprise single sign-on solutions. Use your web3 or crypto wallets to login to your favorite sites.<br/><br/> 
                <ul>
              <li/>- Keycloak
              <li/>- Okta
              <li/>- OpenId
             </ul>
               </p>
            </div>
            <GitBranch className="w-6 h-6 text-primary/60" />
          </div>
          <Link
            to="/AdminPanel"
            className="glass-button mt-4 w-full flex items-center justify-center group"
          >
            SSO Integrations
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="stats-card glow-effect">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-white">Self-Service Administration</h3>
              <p className="text-3xl font-bold gradient-text">
              </p>
              <p className="text-muted-foreground mt-1">
                Manage and monitor your identity, credentials, and consent.
              </p>
              <p className="text-3xl font-bold gradient-text">&nbsp;
              </p>
                <p className="text-muted-foreground mt-1">
                <ul>
              <li/>- System Health
              <li/>- System Integration Management
              <li/>- Smart Contract Deployment
              <li/>- Favorites, Settings, Configurations
              </ul>
              </p>
           </div>
            <Users className="w-6 h-6 text-primary/60" />
          </div>
          <Link
            to="http://localhost:3001/admin-panel"
            className="glass-button mt-4 w-full flex items-center justify-center group"
          >
            Monitor your Identity
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="stats-card glow-effect">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-medium mb-2 text-white">Security</h3>
              <p className="text-muted-foreground mt-1">
                
              </p>
              <p className="text-muted-foreground">
                Upgrade your identity protection by incorporating next-generation encryption, cryptographic frameworks, and protection. Adhere to NIST Post Quantum Cryptograph standards to ensure protection from quantum threats. 
              </p>
            </div>
            <Activity className="w-6 h-6 text-primary/60" />
          </div>
          <Link
            to="/Security"
            className="glass-button mt-4 w-full flex items-center justify-center group"
          >
            Security on Autheo
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>


    </div>
  )
}

export default Home