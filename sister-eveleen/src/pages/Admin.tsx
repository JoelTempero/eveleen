import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Edit3, Trash2, Eye, EyeOff, Save, X, Image, Calendar, ArrowLeft } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { retreats as initialRetreats } from '../data/retreats'
import { newsPosts as initialNews } from '../data/news'
import type { Retreat, NewsPost } from '../types'

type Tab = 'retreats' | 'news'

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>('retreats')
  const [retreatsList, setRetreatsList] = useState<Retreat[]>(initialRetreats)
  const [newsList, setNewsList] = useState<NewsPost[]>(initialNews)
  const [editingRetreat, setEditingRetreat] = useState<Retreat | null>(null)
  const [editingPost, setEditingPost] = useState<NewsPost | null>(null)
  const [showRetreatForm, setShowRetreatForm] = useState(false)
  const [showPostForm, setShowPostForm] = useState(false)

  // Retreat CRUD
  const saveRetreat = (retreat: Retreat) => {
    if (retreatsList.find((r) => r.id === retreat.id)) {
      setRetreatsList(retreatsList.map((r) => (r.id === retreat.id ? retreat : r)))
    } else {
      setRetreatsList([...retreatsList, retreat])
    }
    setEditingRetreat(null)
    setShowRetreatForm(false)
  }

  const deleteRetreat = (id: string) => {
    if (confirm('Are you sure you want to delete this retreat?')) {
      setRetreatsList(retreatsList.filter((r) => r.id !== id))
    }
  }

  const toggleRetreatPublished = (id: string) => {
    setRetreatsList(retreatsList.map((r) => (r.id === id ? { ...r, published: !r.published } : r)))
  }

  // News CRUD
  const savePost = (post: NewsPost) => {
    if (newsList.find((p) => p.id === post.id)) {
      setNewsList(newsList.map((p) => (p.id === post.id ? post : p)))
    } else {
      setNewsList([...newsList, post])
    }
    setEditingPost(null)
    setShowPostForm(false)
  }

  const deletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      setNewsList(newsList.filter((p) => p.id !== id))
    }
  }

  const togglePostPublished = (id: string) => {
    setNewsList(newsList.map((p) => (p.id === id ? { ...p, published: !p.published } : p)))
  }

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--color-sand)' }}>
      <div className="max-w-[1200px] mx-auto px-8 pb-16">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm mb-4 no-underline" style={{ color: 'var(--color-ocean)' }}>
              <ArrowLeft size={14} /> Back to site
            </Link>
            <h1 style={{ fontSize: '2rem' }}>Admin Dashboard</h1>
            <p className="text-sm mt-1" style={{ color: '#666' }}>Manage retreats, events, and news posts. Changes are local to this session (demo mode).</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 p-1 rounded" style={{ background: 'var(--color-sand-dark)' }}>
          {(['retreats', 'news'] as Tab[]).map((tab) => (
            <button
              key={tab}
              className="flex-1 py-3 px-6 rounded text-sm font-medium cursor-pointer border-none transition-all duration-200"
              style={{
                background: activeTab === tab ? 'white' : 'transparent',
                color: activeTab === tab ? 'var(--color-charcoal)' : '#666',
                fontFamily: 'var(--font-body)',
                boxShadow: activeTab === tab ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'retreats' ? 'Retreats & Events' : 'News & Blog Posts'}
            </button>
          ))}
        </div>

        {/* Retreats Tab */}
        {activeTab === 'retreats' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 style={{ fontSize: '1.5rem' }}>Retreats & Events ({retreatsList.length})</h2>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setEditingRetreat({
                    id: String(Date.now()),
                    slug: '',
                    title: '',
                    date: '',
                    description: '',
                    fullDescription: [''],
                    image: '',
                    type: 'guided',
                    published: false,
                  })
                  setShowRetreatForm(true)
                }}
              >
                <Plus size={16} /> Add Retreat
              </button>
            </div>

            <div className="space-y-3">
              {retreatsList.map((retreat) => (
                <div key={retreat.id} className="bg-white rounded p-6 flex flex-col md:flex-row gap-4 items-start md:items-center" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <img src={retreat.image} alt="" className="w-20 h-20 object-cover rounded flex-shrink-0" style={{ background: 'var(--color-sage-light)' }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="truncate" style={{ fontSize: '1.1rem' }}>{retreat.title}</h4>
                      {!retreat.published && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">Draft</span>
                      )}
                    </div>
                    <p className="text-xs" style={{ color: 'var(--color-ocean)' }}>{retreat.date}{retreat.dateEnd ? ` — ${retreat.dateEnd}` : ''}</p>
                    <p className="text-xs mt-1 truncate" style={{ color: '#999' }}>{retreat.description}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      className="p-2 rounded border-none cursor-pointer bg-transparent transition-colors hover:bg-gray-100"
                      title={retreat.published ? 'Unpublish' : 'Publish'}
                      onClick={() => toggleRetreatPublished(retreat.id)}
                    >
                      {retreat.published ? <Eye size={16} color="var(--color-ocean)" /> : <EyeOff size={16} color="#999" />}
                    </button>
                    <button
                      className="p-2 rounded border-none cursor-pointer bg-transparent transition-colors hover:bg-gray-100"
                      title="Edit"
                      onClick={() => { setEditingRetreat(retreat); setShowRetreatForm(true) }}
                    >
                      <Edit3 size={16} color="var(--color-ocean)" />
                    </button>
                    <button
                      className="p-2 rounded border-none cursor-pointer bg-transparent transition-colors hover:bg-red-50"
                      title="Delete"
                      onClick={() => deleteRetreat(retreat.id)}
                    >
                      <Trash2 size={16} color="#e74c3c" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* News Tab */}
        {activeTab === 'news' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 style={{ fontSize: '1.5rem' }}>News & Blog Posts ({newsList.length})</h2>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setEditingPost({
                    id: String(Date.now()),
                    slug: '',
                    title: '',
                    date: new Date().toLocaleDateString('en-NZ', { day: 'numeric', month: 'long', year: 'numeric' }),
                    excerpt: '',
                    content: [''],
                    image: '',
                    published: false,
                  })
                  setShowPostForm(true)
                }}
              >
                <Plus size={16} /> Add Post
              </button>
            </div>

            <div className="space-y-3">
              {newsList.map((post) => (
                <div key={post.id} className="bg-white rounded p-6 flex flex-col md:flex-row gap-4 items-start md:items-center" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                  <img src={post.image} alt="" className="w-20 h-20 object-cover rounded flex-shrink-0" style={{ background: 'var(--color-sage-light)' }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="truncate" style={{ fontSize: '1.1rem' }}>{post.title}</h4>
                      {!post.published && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700">Draft</span>
                      )}
                    </div>
                    <p className="text-xs" style={{ color: 'var(--color-ocean)' }}>{post.date}</p>
                    <p className="text-xs mt-1 truncate" style={{ color: '#999' }}>{post.excerpt}</p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      className="p-2 rounded border-none cursor-pointer bg-transparent transition-colors hover:bg-gray-100"
                      title={post.published ? 'Unpublish' : 'Publish'}
                      onClick={() => togglePostPublished(post.id)}
                    >
                      {post.published ? <Eye size={16} color="var(--color-ocean)" /> : <EyeOff size={16} color="#999" />}
                    </button>
                    <button
                      className="p-2 rounded border-none cursor-pointer bg-transparent transition-colors hover:bg-gray-100"
                      title="Edit"
                      onClick={() => { setEditingPost(post); setShowPostForm(true) }}
                    >
                      <Edit3 size={16} color="var(--color-ocean)" />
                    </button>
                    <button
                      className="p-2 rounded border-none cursor-pointer bg-transparent transition-colors hover:bg-red-50"
                      title="Delete"
                      onClick={() => deletePost(post.id)}
                    >
                      <Trash2 size={16} color="#e74c3c" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Retreat Form Modal */}
        <AnimatePresence>
          {showRetreatForm && editingRetreat && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[2000] flex items-start justify-center pt-24 pb-8 px-4 overflow-y-auto"
              style={{ background: 'rgba(0,0,0,0.5)' }}
              role="dialog"
              aria-modal="true"
              aria-label={editingRetreat.title ? 'Edit retreat' : 'New retreat'}
              onClick={(e) => e.target === e.currentTarget && setShowRetreatForm(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="bg-white rounded w-full max-w-[700px] p-8"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3>{editingRetreat.title ? 'Edit Retreat' : 'New Retreat'}</h3>
                  <button className="p-2 bg-transparent border-none cursor-pointer" onClick={() => setShowRetreatForm(false)}><X size={20} /></button>
                </div>
                <RetreatForm retreat={editingRetreat} onSave={saveRetreat} onCancel={() => setShowRetreatForm(false)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* News Form Modal */}
        <AnimatePresence>
          {showPostForm && editingPost && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[2000] flex items-start justify-center pt-24 pb-8 px-4 overflow-y-auto"
              style={{ background: 'rgba(0,0,0,0.5)' }}
              role="dialog"
              aria-modal="true"
              aria-label={editingPost.title ? 'Edit post' : 'New post'}
              onClick={(e) => e.target === e.currentTarget && setShowPostForm(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="bg-white rounded w-full max-w-[700px] p-8"
                style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h3>{editingPost.title ? 'Edit Post' : 'New Post'}</h3>
                  <button className="p-2 bg-transparent border-none cursor-pointer" onClick={() => setShowPostForm(false)}><X size={20} /></button>
                </div>
                <PostForm post={editingPost} onSave={savePost} onCancel={() => setShowPostForm(false)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function RetreatForm({ retreat, onSave, onCancel }: { retreat: Retreat; onSave: (r: Retreat) => void; onCancel: () => void }) {
  const [form, setForm] = useState<Retreat>({ ...retreat })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const slug = form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    onSave({ ...form, slug })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1 font-medium">Title *</label>
        <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none focus:border-ocean" style={{ fontFamily: 'var(--font-body)' }} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1 font-medium">Start Date *</label>
          <input type="text" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="e.g. 14 March 2026"
            className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none" style={{ fontFamily: 'var(--font-body)' }} />
        </div>
        <div>
          <label className="block text-sm mb-1 font-medium">End Date</label>
          <input type="text" value={form.dateEnd || ''} onChange={(e) => setForm({ ...form, dateEnd: e.target.value })} placeholder="e.g. 16 March 2026"
            className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none" style={{ fontFamily: 'var(--font-body)' }} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1 font-medium">Type</label>
          <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value as Retreat['type'] })}
            className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none" style={{ fontFamily: 'var(--font-body)' }}>
            <option value="guided">Guided</option>
            <option value="silent">Silent</option>
            <option value="weekend">Weekend</option>
            <option value="day">Day</option>
            <option value="group">Group</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1 font-medium">Cost</label>
          <input type="text" value={form.cost || ''} onChange={(e) => setForm({ ...form, cost: e.target.value })} placeholder="e.g. $280"
            className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none" style={{ fontFamily: 'var(--font-body)' }} />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1 font-medium">Short Description *</label>
        <textarea required value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={2}
          className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none resize-y" style={{ fontFamily: 'var(--font-body)' }} />
      </div>
      <div>
        <label className="block text-sm mb-1 font-medium">Full Description (one paragraph per line)</label>
        <textarea value={form.fullDescription.join('\n\n')} onChange={(e) => setForm({ ...form, fullDescription: e.target.value.split('\n\n').filter(Boolean) })} rows={6}
          className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none resize-y" style={{ fontFamily: 'var(--font-body)' }} />
      </div>
      <div>
        <label className="block text-sm mb-1 font-medium">
          <Image size={14} className="inline mr-1" />
          Image URL
        </label>
        <input type="url" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="https://..."
          className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none" style={{ fontFamily: 'var(--font-body)' }} />
        {form.image && <img src={form.image} alt="Preview" className="mt-2 h-32 object-cover rounded" />}
      </div>
      <div>
        <label className="block text-sm mb-1 font-medium">Cost Note</label>
        <input type="text" value={form.costNote || ''} onChange={(e) => setForm({ ...form, costNote: e.target.value })} placeholder="e.g. If the cost is prohibitive..."
          className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none" style={{ fontFamily: 'var(--font-body)' }} />
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        <button type="submit" className="btn btn-primary"><Save size={16} /> Save Retreat</button>
      </div>
    </form>
  )
}

function PostForm({ post, onSave, onCancel }: { post: NewsPost; onSave: (p: NewsPost) => void; onCancel: () => void }) {
  const [form, setForm] = useState<NewsPost>({ ...post })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const slug = form.slug || form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    onSave({ ...form, slug })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1 font-medium">Title *</label>
        <input type="text" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none" style={{ fontFamily: 'var(--font-body)' }} />
      </div>
      <div>
        <label className="block text-sm mb-1 font-medium">
          <Calendar size={14} className="inline mr-1" />
          Date
        </label>
        <input type="text" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="e.g. 20 December 2024"
          className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none" style={{ fontFamily: 'var(--font-body)' }} />
      </div>
      <div>
        <label className="block text-sm mb-1 font-medium">Excerpt *</label>
        <textarea required value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2}
          className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none resize-y" style={{ fontFamily: 'var(--font-body)' }} />
      </div>
      <div>
        <label className="block text-sm mb-1 font-medium">Full Content (one paragraph per line)</label>
        <textarea value={form.content.join('\n\n')} onChange={(e) => setForm({ ...form, content: e.target.value.split('\n\n').filter(Boolean) })} rows={8}
          className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none resize-y" style={{ fontFamily: 'var(--font-body)' }} />
      </div>
      <div>
        <label className="block text-sm mb-1 font-medium">
          <Image size={14} className="inline mr-1" />
          Image URL
        </label>
        <input type="url" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="https://..."
          className="w-full p-3 rounded text-sm border border-gray-200 focus:outline-none" style={{ fontFamily: 'var(--font-body)' }} />
        {form.image && <img src={form.image} alt="Preview" className="mt-2 h-32 object-cover rounded" />}
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        <button type="submit" className="btn btn-primary"><Save size={16} /> Save Post</button>
      </div>
    </form>
  )
}
