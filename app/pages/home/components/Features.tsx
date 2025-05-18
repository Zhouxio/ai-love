import React from 'react';

const features = [
  {
    title: 'AI智能匹配',
    description: '基于先进的机器学习算法，分析双方的性格特征、生活习惯、价值观等多维度数据，提供科学的匹配建议。',
    icon: '🤖'
  },
  {
    title: '专业分析报告',
    description: '生成详细的契合度分析报告，包含匹配度评分、潜在问题预警、关系发展建议等内容。',
    icon: '📊'
  },
  {
    title: '隐私保护',
    description: '采用先进的加密技术，确保用户数据安全，所有个人信息均经过严格加密处理。',
    icon: '🔒'
  },
  {
    title: '持续优化',
    description: '系统会随着使用不断学习和优化，提供越来越精准的匹配建议。',
    icon: '📈'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            为什么选择 AI Love？
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们提供最专业的AI恋爱/婚姻契合度分析服务，帮助您找到最适合的伴侣。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 